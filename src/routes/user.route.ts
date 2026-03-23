import Router from "@koa/router";
import UserController from "../controllers/user.controller";

const router = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
router.get("/users/:id", UserController.show);
router.post("/users", UserController.create);
router.put("/users/:id", UserController.update);

export default router;
