import express from "express";

import { environmentConfig } from "../configs";
import { managerGetOrdersController, managerGetPostsController, managerGetUsersController } from "../controllers";
import { customRoles, isAuth, postPaginationMiddleware } from "../middlewares";
import { authorizationRoles } from "../constants";

const router = express.Router();

router.get("/users", isAuth, customRoles(environmentConfig.MANGER_EMAILS, authorizationRoles.manger), managerGetUsersController);
router.get("/orders", isAuth, customRoles(environmentConfig.MANGER_EMAILS, authorizationRoles.manger), managerGetOrdersController);
router.get("/feed/posts", isAuth, customRoles(environmentConfig.MANGER_EMAILS, authorizationRoles.manger), postPaginationMiddleware(), managerGetPostsController);
export = router;
