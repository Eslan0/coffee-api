import Router from "@koa/router";
import { ResponseT } from "../interfaces/indexInterfaces";
import { customResponse } from "../utils/indexUtils";

const homeRoutes = new Router();

homeRoutes.get("/", async (ctx, res: any) => {
  ctx.body = { message: "API server is running! 🚀" };
});

export default homeRoutes;
