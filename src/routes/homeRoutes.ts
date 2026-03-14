import Router from "koa-router";
//import { ResponseT } from "@src/interfaces";
import { customResponse } from "../utils/";

const homeRoutes = new Router();

homeRoutes.get("/", async (ctx, res: any) => {
  ctx.body = { message: "API server is running! 🚀" };
  /* verificar depois */ res.send(customResponse({ data: null, success: true, error: false, ctx, status: 200 }));
});

export default homeRoutes;
