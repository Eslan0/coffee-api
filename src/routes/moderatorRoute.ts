import express from "express";
import envConfig from "../configs/variable";
import { moderatorGetUsersController } from "../controllers/moderatorController";
import { customRoles, isAuth } from "../middlewares/auth";
import { authorizationRoles } from "../enums";

const router = express.Router();

router.get("/users", isAuth, customRoles(envConfig.MODERATOR_EMAILS, authorizationRoles.moderator), moderatorGetUsersController);

export = router;
