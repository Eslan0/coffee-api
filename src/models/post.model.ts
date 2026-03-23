import mongoose, { Schema, Model } from "mongoose";
import { IPost } from "../interfaces/post.interface";

export const PostSchema: Schema<IPost> = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please provide title"],
      maxLength: 100,
      minlength: 3,
    },
    content: {
      type: String,
      trim: true,
      minlength: 5,
      required: [true, "Please provide post description"],
    },
    postImage: { type: String, required: true },
    cloudinary_id: {
      type: String,
    },
    author: {
      // every post shuold blong to user
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // add relationship
      required: [true, "author is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required please select one"],
    },
    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", // add relationship
          required: [true, "User is required"],
        },
      },
    ],
    comments: [
      {
        comment: {
          type: String,
          required: true,
        },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", // add relationship
          required: [true, "User is required"],
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Post: Model<IPost> = mongoose.model<IPost>("Post", PostSchema);

export default Post;
