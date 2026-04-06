import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

class AuthService {
  async signup(email: string, password: string) {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("user already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    return newUser;
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("user not found");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error("invalid password");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return { user, token };
  }

  async updatePassword(userId: string, newPassword: string) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const user = await User.findByIdAndUpdate(userId, { password: hashedPassword }, { new: true });
    return user;
  }

  async verifyEmail(userId: string) {
    const user = await User.findByIdAndUpdate(userId, { emailVerified: true }, { new: true });
    return user;
  }

  async refreshToken(token: string) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;

      const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

      return newToken;
    } catch {
      throw new Error("Invalid refresh token");
    }
  }

  async resetPassword(userId: string, newPassword: string) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const user = await User.findByIdAndUpdate(userId, { password: hashedPassword }, { new: true });
    return user;
  }
}

export default new AuthService();
