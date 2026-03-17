import mongoose, { Schema, Document } from "mongoose";
import { IProduct } from "./Product";
import { IUser } from "./User";

export interface IOrder extends Document {
  orderItems: { quantity: number; product: mongoose.Schema.Types.ObjectId }[];
  user: Schema.Types.ObjectId;
  shippingInfo: ShippingInfoT;
  paymentInfo: string;
  textAmount: number;
  shippingAmount: number;
  totalAmount: number;
  orderStatus: string;
  deliveredAt: Date;
  products: Schema.Types.ObjectId[];
  total: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface OrderedUser extends IUser {
  product: mongoose.Schema.Types.ObjectId;
}

export interface ShippingInfoT {
  address: string;
  phoneNo: string;
  zipCode: string;
  status: string;
  country: string;
  street: string;
  city: string;
}

export interface ProcessingStripeCheckoutT extends IUser {
  orderItems: { quantity: number; product: IProduct }[];
}
