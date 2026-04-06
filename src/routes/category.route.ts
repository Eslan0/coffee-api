import Router from "@koa/router";
import CategoryController from "../controllers/category.controller";
import { verifyToken } from "../middlewares/auth.middleware";
import { isAdmin } from "../middlewares/role.middleware";

const router = new Router();

router.get("/categories", CategoryController.index);
router.post("/categories/", verifyToken, isAdmin, CategoryController.create);
router.put("/categories/:id", verifyToken, isAdmin, CategoryController.update);
router.delete("/categories/:id", verifyToken, isAdmin, CategoryController.delete);

export default router;
