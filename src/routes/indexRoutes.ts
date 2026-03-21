import Router from "@koa/router";
import homeRoutes from "./homeRoutes";
import userRoutes from "./userRoutes";
import sectionRoutes from "./sectionRoutes";
import productRoutes from "./productRoutes";
import orderRoutes from "./orderRoutes";
import envConfig from "../configs/variable";

const apiVersion = envConfig.API_VERSION;

const indexRoutes = new Router({ prefix: `/v${apiVersion}` });

indexRoutes.use(homeRoutes.routes());
indexRoutes.use(homeRoutes.allowedMethods());
indexRoutes.use(userRoutes.routes());
indexRoutes.use(userRoutes.allowedMethods());
indexRoutes.use(sectionRoutes.routes());
indexRoutes.use(sectionRoutes.allowedMethods());
indexRoutes.use(productRoutes.routes());
indexRoutes.use(productRoutes.allowedMethods());
indexRoutes.use(orderRoutes.routes());
indexRoutes.use(orderRoutes.allowedMethods());

export default indexRoutes;
