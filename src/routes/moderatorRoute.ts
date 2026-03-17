import express from "express";
import { envConfig } from "../configs";
import { moderatorGetUsersController } from "../controllers/moderatorController";
import { customRoles, isAuth } from "../middlewares/indexMiddlewares";
import { authorizationRoles } from "../constants";

const router = express.Router();

router.get("/users", isAuth, customRoles(envConfig.MODERATOR_EMAILS, authorizationRoles.moderator), moderatorGetUsersController);

export = router;
