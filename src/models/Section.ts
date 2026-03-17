import mongoose, { Schema, Document, Model } from "mongoose";
import { ISection } from "../interfaces/indexInterfaces";

const SectionSchema = new Schema<ISection>(
  {
    name: {
      type: String,
      required: [true, "O nome é obrigatório"],
      trim: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Section: Model<ISection> = mongoose.model<ISection>("Section", SectionSchema);

export default Section;
