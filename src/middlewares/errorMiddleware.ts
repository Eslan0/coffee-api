import { Context } from "koa";

// Middleware for global error handling
export const errorMiddleware = () => async (ctx: Context, next: () => Promise<void>) => {
  try {
    await next();
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: "Erro interno do servidor", error };
  }
};

export default errorMiddleware;
