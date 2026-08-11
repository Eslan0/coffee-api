import Router from "@koa/router";
import swaggerMiddleware from "@/middleware/swagger.middleware";

const router = new Router();

router.get("/docs", swaggerMiddleware());

export default router;
