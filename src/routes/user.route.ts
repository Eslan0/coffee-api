import Router from "@koa/router";
import UserController from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth.middleware";
import { isAdmin } from "../middlewares/role.middleware";

const router = new Router();

router.get("/users", verifyToken, isAdmin, UserController.index);
router.post("/users", verifyToken, isAdmin, UserController.create);
router.get("/users/:id", verifyToken, isAdmin, UserController.show);
router.put("/users/:id", verifyToken, isAdmin, UserController.update);
router.delete("/users/:id", verifyToken, isAdmin, UserController.delete);

export default router;
