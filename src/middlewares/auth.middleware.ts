import { Context, Next } from "koa";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const verifyToken = async (ctx: Context, next: Next) => {
  try {
    const authHeader = ctx.headers.authorization;

    if (!authHeader) {
      ctx.status = 401;
      ctx.body = { message: "Token not provided" };
      return;
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
      role: string;
    };

    ctx.state.user = decoded;

    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = { message: "Invalid or expired token" };
  }
};
