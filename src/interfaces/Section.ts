import { Document } from "mongoose";

export interface ISection extends Document {
  name: string;
  products: string[];
  createdAt: Date;
  updatedAt: Date;
}
