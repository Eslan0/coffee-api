import mongoose, { Schema, Model } from "mongoose";
import { CartItemT, IUser, IUserDocument } from "../interfaces";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import envConfig from "../configs/variable";

const UserSchema = new Schema<IUser>(
  {
    name: {
      minLength: [3, "Name can't be smaller than 3 characters"],
      maxLength: [15, "Name can't be greater than 15 characters"],
      type: String,
      required: [true, "O nome é obrigatório"],
      lowercase: true,
      trim: true,
    },
    surname: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Please provide surname"],
      minLength: [3, "Surname can't be smaller than 3 characters"],
      maxLength: [15, "Surname can't be greater than 15 characters"],
    },
    email: {
      type: String,
      required: [true, "O email é obrigatório"],
      unique: true,
      lowercase: true,
      trim: true,
      maxLength: [128, "Email can't be greater than 128 characters"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Por favor, use um email válido",
      ],
    },
    password: {
      type: String,
      required: [true, "A senha é obrigatória"],
      minlength: [6, "Password must be more than 6 characters"],
      trim: true,
      select: false, // Optional: Prevents the password from being included in queries by default.
    },
    confirmPassword: {
      type: String,
      required: [true, "Please provide confirmed Password"],
      minlength: [6, "Password must be more than 6 characters"],
      trim: true,
      select: false,
    },
    cart: {
      items: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product", // add relationship
            required: [true, "Please provide Product"],
          },
          quantity: {
            type: Number,
            required: [true, "Please provide quantity"],
          },
        },
      ],
    },
    companyName: {
      type: String,
      required: false,
      trim: true,
      minlength: [3, "Company Name can't be smaller than 3 characters"],
      maxLength: [30, "Company Name can't be greater than 30 characters"],
      lowercase: true,
    },
    dateOfBirth: {
      type: String,
      maxLength: 15,
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: false,
      maxLength: [18, "mobileNumber can't be greater than 18 characters"],
      // match: [/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Please provide a valid number'],
      trim: true,
    },
    cloudinary_id: {
      type: String,
    },
    role: {
      type: String,
      trim: true,
      lowercase: true,
      enum: [
        "user",
        "admin",
        "manager",
        "moderator",
        "supervisor",
        "guide",
        "client",
      ],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: true,
      required: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["pending", "active"],
      default: "active",
      required: false,
      trim: true,
      lowercase: true,
    },
    jobTitle: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
      minlength: [2, "Job Title can't be smaller than 3 characters"],
      maxLength: [30, "Job Title can't be greater than 15 characters"],
    },
    address: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
    },
    acceptTerms: { type: Boolean, required: false, default: false },
    confirmationCode: { type: String, require: false, index: true, unique: true, sparse: true },
    resetPasswordToken: {
      type: String,
      required: false,
    },
    resetPasswordExpires: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

// Pre-save hook para a senha
UserSchema.pre<IUserDocument>("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  try {
    if (process.env.NODE_ENV === "development") {
      console.log("Gerando hash para o usuário:", this.email);
    }

    const salt = await bcrypt.genSalt(12);

    this.password = await bcrypt.hash(this.password, salt);
    this.confirmPassword = undefined;
  } catch (error: any) {
    throw error;
  }
});

UserSchema.post("save", function () {
  if (envConfig?.NODE_ENV && envConfig.NODE_ENV === "development") {
    console.log("Middleware called after saving the user is (User is been Save )", this);
  }
});

UserSchema.methods.createJWT = function (this: IUserDocument): string {
  const payload = {
    userId: this._id.toString(),
    email: this.email,
    name: this.name,
    role: this.role,
  };

  const expireTime = (envConfig.JWT_EXPIRE_TIME as string) || "1d";

  return jwt.sign(payload, envConfig.TOKEN_SECRET as string, {
    expiresIn: expireTime as any,
  });
};

UserSchema.methods.addToCart = function (prodId: string, doDecrease: boolean) {
  let cartProductIndex = -1;
  let updatedCartItems: CartItemT[] = [];

  if (this.cart.items) {
    cartProductIndex = this.cart.items.findIndex((cp: { productId: { toString: () => string } }) => {
      return cp.productId.toString() === prodId.toString();
    });
    updatedCartItems = [...this.cart.items];
  }

  let newQuantity = 1;
  if (cartProductIndex >= 0) {
    if (doDecrease) {
      newQuantity = this.cart.items[cartProductIndex].quantity - 1;
      if (newQuantity <= 0) {
        return this.removeFromCart(prodId);
      }
    } else {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    }
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      productId: prodId,
      quantity: newQuantity,
    });
  }

  const updatedCart = {
    items: updatedCartItems,
  };

  this.cart = updatedCart;
  return this.save({ validateBeforeSave: false });
};

UserSchema.methods.removeFromCart = function (productId: string) {
  const updatedCartItems = this.cart.items.filter((item: { productId: { toString: () => string } }) => {
    return item.productId.toString() !== productId.toString();
  });
  this.cart.items = updatedCartItems;
  return this.save({ validateBeforeSave: false });
};

UserSchema.methods.clearCart = async function (): Promise<boolean> {
  this.cart = { items: [] };
  return this.save({ validateBeforeSave: false });
};

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
