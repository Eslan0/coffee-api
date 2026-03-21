import Router from "@koa/router";
import UserController from "../controllers/userController";

const userRoutes = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
userRoutes.get("/users/:id", UserController.show);
userRoutes.post("/users", UserController.create);
userRoutes.put("/users/:id", UserController.update);

export default userRoutes;
