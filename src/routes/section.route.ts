import Router from "@koa/router";
import SectionController from "../controllers/section.controller";
import { verifyToken } from "../middlewares/auth.middleware";
import { isAdmin } from "../middlewares/role.middleware";

const router = new Router();

router.get("/sections", SectionController.index);
router.post("/sections", verifyToken, isAdmin, SectionController.create);
router.put("/sections/:id", verifyToken, isAdmin, SectionController.update);
router.delete("/sections/:id", verifyToken, isAdmin, SectionController.delete);

export default router;
