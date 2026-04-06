import { Types } from "mongoose";
import { IProduct } from "./product.interface";
import { IUser } from "./user.interface";

export type OrderStatus =
  | "pending"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface IOrder {
  user: IOrderUser;
  orderItems: IOrderItem[];
  shippingInfo: IShippingInfo;
  paymentInfo: string;
  taxAmount: number;
  shippingAmount: number;
  totalAmount: number;
  status: OrderStatus;
  deliveredAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IOrderItem {
  product: Types.ObjectId;
  quantity: number;
}

export interface IShippingInfo {
  address: string;
  phone: string;
  zipCode: string;
  street?: string;
  city: string;
  country: string;
}

export interface IOrderUser {
  userId: Types.ObjectId;
  email: string;
  name: string;
  surname: string;
  phone: string;
}

export interface IOrderItemPopulated {
  product: IProduct;
  quantity: number;
}

export interface ProcessingStripeCheckoutT extends IUser {
  orderItems: IOrderItemPopulated[];
}
