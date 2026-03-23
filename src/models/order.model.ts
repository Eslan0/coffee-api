import mongoose, { Schema, Model } from "mongoose";
import { IOrder } from "../interfaces/order.interface";

const OrderSchema = new Schema<IOrder>(
  {
    shippingInfo: {
      address: { type: String, required: true, trim: true, lowercase: true },
      phoneNo: { type: String, required: true, trim: true },
      zipCode: { type: String, required: true, trim: true, lowercase: true },
      street: { type: String, trim: true, lowercase: true },
      city: { type: String, required: true, trim: true, lowercase: true },
      country: { type: String, required: true, trim: true, lowercase: true },
    },
    user: {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      email: { type: String, required: true },
      name: { type: String, trim: true, lowercase: true, required: true },
      surname: { type: String, trim: true, lowercase: true, required: true },
      phone: { type: String, required: true },
    },
    orderItems: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true },
      },
    ],
    paymentInfo: { type: String, required: true },
    textAmount: { type: Number, required: true, default: 0 },
    shippingAmount: { type: Number, required: true, default: 0 },
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: Object.values(["pending", "shipped", "delivered", "cancelled"]),
      default: "pending",
      trim: true,
    },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Order: Model<IOrder> = mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
