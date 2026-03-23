import Router from "@koa/router";
import envConfig from "../configs/variable";
import { moderatorGetUsersController } from "../controllers";
import { customRoles, isAuth } from "../middlewares";
import { authorizationRoles } from "../enums";

const router = new Router();

router.get("/users", isAuth, customRoles(envConfig.MODERATOR_EMAILS, authorizationRoles.moderator), moderatorGetUsersController);

export default router;
