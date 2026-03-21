import express from "express";
import envConfig from "../configs/variable";
import { managerGetOrdersController, managerGetPostsController, managerGetUsersController } from "../controllers/indexControllers";
import { customRoles, isAuth, postPaginationMiddleware } from "../middlewares/auth";
import { authorizationRoles } from "../enums";

const router = express.Router();

router.get("/users", isAuth, customRoles(envConfig.MANGER_EMAILS, authorizationRoles.manger), managerGetUsersController);
router.get("/orders", isAuth, customRoles(envConfig.MANGER_EMAILS, authorizationRoles.manger), managerGetOrdersController);
router.get("/feed/posts", isAuth, customRoles(envConfig.MANGER_EMAILS, authorizationRoles.manger), postPaginationMiddleware(), managerGetPostsController);
export = router;
