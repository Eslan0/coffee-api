import mongoose, { Schema, Model } from "mongoose";
import { IOrder } from "../interfaces/order.interface";

const OrderSchema = new Schema<IOrder>(
  {
    shippingInfo: {
      address: { type: String, required: true, trim: true, lowercase: true },
      phoneNo: { type: String, required: true, trim: true },
      zipCode: { type: String, required: true, trim: true },
      street: { type: String, trim: true },
      city: { type: String, required: true, trim: true },
      country: { type: String, required: true, trim: true },
    },
    user: {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      email: { type: String, required: true },
      name: { type: String, required: true },
      surname: { type: String, required: true },
      phone: { type: String, required: true },
    },
    orderItems: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    paymentInfo: { type: String, required: true },
    taxAmount: { type: Number, required: true, default: 0 },
    shippingAmount: { type: Number, required: true, default: 0 },
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order: Model<IOrder> = mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
