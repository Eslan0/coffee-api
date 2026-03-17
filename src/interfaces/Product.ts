import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./User";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  quantity: number;
  productImage: string;
  productImages: {
    url: string;
    cloudinary_id: string;
  }[];
  brand: string;
  category: string;
  stock?: string;
  numberOfReviews: number;
  reviews: IReviews[];
  ratings?: number;
  user: mongoose.Types.ObjectId;
  _id: mongoose.Types.ObjectId;
  createdAt?: string;
  updatedAt?: string;
  section: mongoose.Types.ObjectId;
}

export interface IReviews {
  user: mongoose.Types.ObjectId;
  name: string;
  rating?: number;
  comment: string;
}

export interface IAddProductToCart extends IUser {
  productId: string;
}
export interface IReviewProduct extends IUser {
  productId: string;
  rating: number;
  comment: string;
}