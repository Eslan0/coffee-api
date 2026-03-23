import mongoose, { Schema, Model } from "mongoose";
import { IProduct } from "../interfaces/product.interface";

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      maxLength: 100,
      minlength: 3,
      trim: true,
      lowercase: true,
    },
    price: {
      type: Number,
      required: [true, "Please provide price"],
    },
    brand: {
      type: String,
      required: [true, "Please product brand"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please provide description"],
      // maxLength: 500,
      minlength: 15,
      trim: true,
      lowercase: true,
    },
    productImage: {
      type: String,
      required: [false, "Please provide product image"],
      trim: true,
    },
    productImages: [
      {
        url: {
          type: String,
          required: true,
          trim: true,
        },
        cloudinary_id: {
          type: String,
          required: false,
        },
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required please select one"],
    },
    stock: {
      type: String,
      required: false,
      maxLength: 50,
      minlength: 3,
      trim: true,
      lowercase: true,
      default: "in stock - order soon",
    },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: [true, "Section is required"],
    },
    numberOfReviews: {
      type: Number,
      required: false,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: [true, "User is required"],
        },
        name: { type: String, required: true, trim: true },
        rating: { type: Number, default: 0 },
        comment: { type: String },
      },
    ],
    ratings: {
      type: Number,
      default: 0,
    },
    user: {
      // every products shuold blong to user
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // add relationship
      required: [true, "User is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

ProductSchema.post("save", function () {
  if (process.env.NODE_ENV && process.env.NODE_ENV === "development") {
    console.log("Middleware called after saving the product is (product is been Save )", this);
  }
});

const Product: Model<IProduct> = mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
