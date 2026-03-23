import Router from "@koa/router";
import envConfig from "../configs/variable";
import homeRoutes from "./home.route";
import userRoutes from "./user.route";
import sectionRoutes from "./section.route";
import productRoutes from "./product.route";
import orderRoutes from "./order.route";
import docRoutes from "./doc.route";

const router = new Router({ prefix: `/v${envConfig.API_VERSION}` });

// array of routes
const apiRoutes = [
  homeRoutes,
  userRoutes,
  sectionRoutes,
  productRoutes,
  orderRoutes,
  docRoutes
];

for (const route of apiRoutes) {
  router.use(route.routes());
  router.use(route.allowedMethods());
}

export default router;
