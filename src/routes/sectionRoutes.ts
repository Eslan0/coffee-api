import Router from "@koa/router";
import SectionController from "../controllers/sectionController";

const sectionRoutes = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
sectionRoutes.get("/sections", SectionController.index);
sectionRoutes.post("/sections", SectionController.create);
sectionRoutes.put("/sections/:id", SectionController.update);
sectionRoutes.delete("/sections/:id", SectionController.delete);

export default sectionRoutes;
