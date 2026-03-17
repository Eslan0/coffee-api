import { Document } from "mongoose";
import { Context } from "koa";

export interface IUser extends Document {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role?: string;
  acceptTerms: boolean;
  mobileNumber?: string;
  companyName?: string;
  profileImage?: string;
  jobTitle?: string;
  status?: string;
  isVerified?: boolean;
  isDeleted?: boolean;
  address?: string;
  dateOfBirth?: string;
  createdAt?: string;
  updatedAt?: string;
  emailVerificationLinkToken?: string;
  token?: string;
  accessToken?: string;
  refreshToken?: string;
  confirmationCode?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: string;
  userId?: string;
  timestamps?: boolean;
  cart?: {
    items: {
      productId: string;
      quantity: number;
    }[];
  };
  cloudinary_id?: string;
}

// Authentication
export interface IAuthRequest extends Context {
  headers: { authorization?: string; Authorization?: string };
  user?: IUser;
}

// Type for item in shopping cart
export type CartItemT = {
  productId: string;
  quantity: number;
};

export interface IUserDocument extends IUser, Document {
  comparePassword(password: string): Promise<boolean>;
  createJWT(): string;
  clearCart(): Promise<void>;
  addToCart(prodId: string, doDecrease: boolean): Promise<boolean>;
  removeFromCart(prodId: string): Promise<void>;
}