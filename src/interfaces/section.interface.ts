import { Types } from "mongoose";

export interface ISection {
  name: string;
  products: Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}
