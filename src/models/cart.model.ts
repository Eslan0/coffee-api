import mongoose, { Schema, Model } from "mongoose";
import { ICart } from "../interfaces/cart.interface";

const CartSchema = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Cart: Model<ICart> = mongoose.model<ICart>("Cart", CartSchema);

export default Cart;
