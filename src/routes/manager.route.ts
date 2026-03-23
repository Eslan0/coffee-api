import Router from "@koa/router";
import envConfig from "../configs/variable";
import { managerGetOrdersController, managerGetPostsController, managerGetUsersController } from "../controllers";
import { customRoles, isAuth, postPaginationMiddleware } from "../middlewares";
import { authorizationRoles } from "../enums";

const router = new Router();

router.get("/users", isAuth, customRoles(envConfig.MANGER_EMAILS, authorizationRoles.manger), managerGetUsersController);
router.get("/orders", isAuth, customRoles(envConfig.MANGER_EMAILS, authorizationRoles.manger), managerGetOrdersController);
router.get("/feed/posts", isAuth, customRoles(envConfig.MANGER_EMAILS, authorizationRoles.manger), postPaginationMiddleware(), managerGetPostsController);

export default router;
