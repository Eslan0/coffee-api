import Router from "@koa/router";
import userController from "../controllers/userController";

const userRoutes = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
userRoutes.get("/users/:id", userController.show);
userRoutes.post("/users", userController.create);
userRoutes.put("/users/:id", userController.update);

export default userRoutes;
