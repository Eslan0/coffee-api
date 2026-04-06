import { Context } from "koa";
import authService from "../services/auth.service";

class AuthController {
  async signup(ctx: Context) {
    try {
      const { email, password } = ctx.request.body;
      const user = await authService.signup(email, password);
      ctx.status = 201;
      ctx.body = { message: "User created successfully", user };
    } catch (error: any) {
      ctx.status = 400;
      ctx.body = { message: error.message };
    }
  }

  async login(ctx: Context) {
    try {
      const { email, password } = ctx.request.body;
      const { user, token } = await authService.login(email, password);
      ctx.status = 200;
      ctx.body = { message: "Successful login", user, token };
    } catch (error: any) {
      ctx.status = 401;
      ctx.body = { message: error.message };
    }
  }

  async forgotPassword(ctx: Context) {
    try {
      const { email } = ctx.request.body;
      const user = await authService.forgotPassword(email);
      ctx.body = { message: "Email sent successfully", user };
    } catch (error: any) {
      ctx.status = 400;
      ctx.body = { message: error.message };
    }
  }

  async verifyEmail(ctx: Context) {
    try {
      const { userId } = ctx.params;
      const user = await authService.verifyEmail(userId);
      ctx.body = { message: "Email verified successfully", user };
    } catch (error: any) {
      ctx.status = 400;
      ctx.body = { message: error.message };
    }
  }

  async refreshToken(ctx: Context) {
    try {
      const { refreshToken } = ctx.request.body;
      const { user, token } = await authService.refreshToken(refreshToken);
      ctx.body = { message: "Token updated successfully", user, token };
    } catch (error: any) {
      ctx.status = 400;
      ctx.body = { message: error.message };
    }
  }

  async resetPassword(ctx: Context) {
    try {
      const { email } = ctx.request.body;
      const user = await authService.resetPassword(email);
      ctx.body = { message: "Password reset successfully", user };
    } catch (error: any) {
      ctx.status = 400;
      ctx.body = { message: error.message };
    }
  }

  async logout(ctx: Context) {
    try {
      const { userId } = ctx.params;
      const user = await authService.logout(userId);
      ctx.body = { message: "Successful logout", user };
    } catch (error: any) {
      ctx.status = 400;
      ctx.body = { message: error.message };
    }
  }
}

export default new AuthController();
