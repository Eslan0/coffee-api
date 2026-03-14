import mongoose, { Schema, Model } from "mongoose";
import { IOrder } from "../interfaces";

// Schema
const OrderSchema = new Schema<IOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Creates createdAt and updatedAt automatically.
    toJSON: {
      virtuals: true, // Expose virtual fields.
    },
  }
);

const Order: Model<IOrder> = mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
