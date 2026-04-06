import Router from "@koa/router";
import AuthController from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = new Router();

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.post("/refresh-token", AuthController.refreshToken);
router.post("/forgot-password", AuthController.forgotPassword);
router.post("/reset-password/:userId/:token", AuthController.resetPassword);
router.get("/verify-email/:userId/:token", AuthController.verifyEmail);
router.post("/update-email", AuthController.updateEmail);
router.get("/me", verifyToken, AuthController.getAuthUser);

export default router;
