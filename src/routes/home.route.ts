import Router from "@koa/router";
import { ResponseT } from "../interfaces/message.interface";
import { customResponse } from "../utils/response.util";

const router = new Router();

router.get("/", async (ctx: any) => {
  const message = "API server is running! 🚀";
  ctx.body = (customResponse({ message, data: null, success: true, error: false, status: 200 }));
});

export default router;
