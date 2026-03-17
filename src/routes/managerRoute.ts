import express from "express";
import { envConfig } from "../configs";
import { managerGetOrdersController, managerGetPostsController, managerGetUsersController } from "../controllers/indexControllers";
import { customRoles, isAuth, postPaginationMiddleware } from "../middlewares/indexMiddlewares";
import { authorizationRoles } from "../constants";

const router = express.Router();

router.get("/users", isAuth, customRoles(envConfig.MANGER_EMAILS, authorizationRoles.manger), managerGetUsersController);
router.get("/orders", isAuth, customRoles(envConfig.MANGER_EMAILS, authorizationRoles.manger), managerGetOrdersController);
router.get("/feed/posts", isAuth, customRoles(envConfig.MANGER_EMAILS, authorizationRoles.manger), postPaginationMiddleware(), managerGetPostsController);
export = router;
