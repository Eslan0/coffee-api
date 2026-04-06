import mongoose, { Schema, Model } from "mongoose";
import { IUser, IUserDocument } from "../interfaces";
import bcrypt from "bcrypt";
import jwt, { Secret, SignOptions } from "jsonwebtoken";
import envConfig from "../configs/variable";

const UserSchema = new Schema<IUserDocument>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is mandatory"],
      trim: true,
      minLength: [3, "Name can't be smaller than 3 characters"],
      maxLength: [40, "Name can't be greater than 40 characters"],
    },
    username: {
      type: String,
      required: [true, "Username is mandatory"],
      unique: true,
      lowercase: true,
      trim: true,
      minLength: [3, "Username too short"],
      maxLength: [20, "Username too long"],
    },
    email: {
      type: String,
      required: [true, "Email is mandatory"],
      unique: true,
      lowercase: true,
      trim: true,
      maxLength: [128, "Email too long"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please use a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be more than 6 characters"],
      select: false, // Optional: Prevents the password from being included in queries by default.
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: false,
      trim: true,
      maxLength: [18, "Mobile number too long"],
    },
    companyName: {
      type: String,
      required: false,
      trim: true,
      minlength: [3, "Too short"],
      maxLength: [30, "Too long"],
      lowercase: true,
    },
    jobTitle: {
      type: String,
      trim: true,
      lowercase: true,
      minlength: [2, "Too short"],
      maxLength: [30, "Too long"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password
UserSchema.pre<IUserDocument>("save", async function () {
  if (!this.isModified("password")) return;

  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
  } catch {
    throw new Error("Error hashing password");
  }
});

UserSchema.methods.comparePassword = async function (
  this: IUserDocument,
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.createJWT = function (this: IUserDocument): string {
  const payload = {
    userId: this._id.toString(),
    role: this.role,
  };
  const secret: Secret = envConfig.TOKEN_SECRET as string;
  if (!secret) {
    throw new Error("Token secret not found");
  }
  const options: SignOptions = {
    expiresIn: (envConfig.JWT_EXPIRE_TIME as SignOptions['expiresIn']) || "1d",
  };
  return jwt.sign(payload, secret, options);
};

const User: Model<IUserDocument> = mongoose.model<IUserDocument>("User", UserSchema);

export default User;
