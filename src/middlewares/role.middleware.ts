import { Context, Next } from "koa";

export const isAdmin = async (ctx: Context, next: Next) => {
  const user = ctx.state.user;

  if (!user) {
    ctx.status = 401;
    ctx.body = { message: "Unauthorized" };
    return;
  }

  if (user.role !== "admin") {
    ctx.status = 403;
    ctx.body = { message: "Forbidden: Admins only" };
    return;
  }

  await next();
};
