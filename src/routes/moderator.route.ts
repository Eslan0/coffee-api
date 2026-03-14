import express from "express";

import { environmentConfig } from "../configs";
import { moderatorGetUsersController } from "../controllers/moderator.controller";
import { customRoles, isAuth } from "../middlewares";
import { authorizationRoles } from "../constants";

const router = express.Router();

router.get("/users", isAuth, customRoles(environmentConfig.MODERATOR_EMAILS, authorizationRoles.moderator), moderatorGetUsersController);

export = router;
