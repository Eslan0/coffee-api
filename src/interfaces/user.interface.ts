import { Document } from "mongoose";
import { Context } from "koa";

export interface IUser {
  fullName: string;
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
  dateOfBirth: Date;
  mobileNumber?: string;
  jobTitle?: string;
  companyName?: string;
  isVerified: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Authentication
export interface IAuthRequest extends Context {
  headers: { authorization?: string; };
  user?: IUserDocument;
}

export interface IUserDocument extends IUser, Document {
  comparePassword(password: string): Promise<boolean>;
  createJWT(): string;
}
