import Router from "@koa/router";
import envConfig from "../configs/variable";
import authRoutes from "./auth.route";
import cartRoutes from "./cart.route";
import categoryRoutes from "./category.route";
import homeRoutes from "./home.route";
import orderRoutes from "./order.route";
import productRoutes from "./product.route";
import sectionRoutes from "./section.route";
import userRoutes from "./user.route";
import docRoutes from "./doc.route";

const router = new Router({ prefix: `/v${envConfig.API_VERSION}` });

// array of routes
const apiRoutes = [authRoutes, cartRoutes, categoryRoutes, docRoutes, homeRoutes, orderRoutes, productRoutes, sectionRoutes, userRoutes];

for (const route of apiRoutes) {
  router.use(route.routes());
  router.use(route.allowedMethods());
}

export default router;
