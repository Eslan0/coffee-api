import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "../interfaces";

// Schema
const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "O nome é obrigatório"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "O email é obrigatório"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Por favor, use um email válido"],
    },
    password: {
      type: String,
      required: [true, "A senha é obrigatória"],
      minlength: 6,
      select: false, // Optional: Prevents the password from being included in queries by default.
    },
  },
  {
    timestamps: true, // Creates createdAt and updatedAt automatically.
    toJSON: {
      transform: (_, ret) => {
        delete ret.password; // Ensures the password never ends up in the final JSON.
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Avoid model overwrite error in Next.js/Hot Reloading
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
