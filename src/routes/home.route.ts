import Router from "@koa/router";

const router = new Router();

router.get("/", async (ctx: any) => {
  ctx.body = "API server is running! 🚀";
});

export default router;
