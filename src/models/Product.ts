import mongoose, { Schema, Model } from "mongoose";
import { IProduct } from "../interfaces";

// Schema
const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "O nome é obrigatório"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "A descrição é obrigatória"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "O preço é obrigatório"],
    },
    quantity: {
      type: Number,
      required: [true, "A quantidade é obrigatória"],
    },
    image: {
      type: String,
      required: [true, "A imagem é obrigatória"],
    },
    section: {
      type: Schema.Types.ObjectId,
      ref: "Section",
      required: [true, "A seção é obrigatória"],
    },
  },
  {
    timestamps: true, // Creates createdAt and updatedAt automatically.
    toJSON: {
      transform: (_, ret) => {
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
