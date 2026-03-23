import mongoose, { Schema, Model } from "mongoose";
import { ICategory } from "../interfaces/category.interface";

const CategorySchema : Schema<ICategory> = new Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  },
  slug: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true 
  }
}, { timestamps: true });

const Category: Model<ICategory> = mongoose.model<ICategory>("Category", CategorySchema);

export default Category;
