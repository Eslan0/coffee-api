import Router from "koa-router";
import userController from "../controllers/userController";
import { followUserController, unFollowUserController } from "../controllers/user.controller";
import { isAuth, updateUserValidation } from "../middlewares";

const userRoutes = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
userRoutes.get("/users/:id", userController.show);
userRoutes.post("/users", userController.create);
userRoutes.put("/users/:id", userController.update);
// news
userRoutes.put("/:userId/follow", isAuth, updateUserValidation, followUserController);
userRoutes.put("/:userId/un-follow", isAuth, updateUserValidation, unFollowUserController);

export default userRoutes;
