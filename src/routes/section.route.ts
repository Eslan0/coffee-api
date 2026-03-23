import Router from "@koa/router";
import SectionController from "../controllers/section.controller";

const router = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
router.get("/sections", SectionController.index);
router.post("/sections", SectionController.create);
router.put("/sections/:id", SectionController.update);
router.delete("/sections/:id", SectionController.delete);

export default router;
