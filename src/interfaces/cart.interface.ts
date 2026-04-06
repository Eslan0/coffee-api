import { Types } from "mongoose";
import { IProduct } from "./product.interface";

export interface ICart {
  user: Types.ObjectId;
  products: ICartItem[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICartItem {
  product: Types.ObjectId;
  quantity: number;
}
