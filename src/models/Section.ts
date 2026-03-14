import mongoose, { Schema, Document, Model } from "mongoose";

// Schema
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
    timestamps: true, // Creates createdAt and updatedAt automatically.
    toJSON: {
      transform: (_, ret) => {
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Section: Model<ISection> = mongoose.models.Section || mongoose.model<ISection>("Section", SectionSchema);

export default Section;
