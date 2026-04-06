import { Context } from "koa";
import userService from "../services/user.service";

class UserController {
  // get /users - user list
  async index(ctx: Context) {
    try {
      const users = await userService.getAll();
      ctx.body = users;
    } catch (error) {
      ctx.status = 400;
      ctx.body = { message: "Error searching for users", error };
    }
  }

  // get /users/:id - search for a user by id
  async show(ctx: Context) {
    try {
      const userId = ctx.params.id;
      const user = await userService.getById(userId);

      ctx.body = user;
    } catch (error) {
      ctx.status = 400;
      ctx.body = { message: "Error searching for user", error };
    }
  }

  // post /users - create a new user
  async create(ctx: Context) {
    try {
      const userData = ctx.request.body;
      const newUser = await userService.create(userData);

      ctx.body = newUser;
    } catch (error) {
      ctx.status = 400;
      ctx.body = { message: "Error creating user", error };
    }
  }

  // put /users/:id - update an existing user
  async update(ctx: Context) {
    try {
      const userId = ctx.params.id;
      const userData = ctx.request.body;
      const updatedUser = await userService.update(userId, userData);

      ctx.body = updatedUser;
    } catch (error) {
      ctx.status = 400; // validation error or malformed data
      ctx.body = { message: "Error updating user", error };
    }
  }

  // delete /users/:id - delete an existing user
  async delete(ctx: Context) {
    try {
      const userId = ctx.params.id;
      const deletedUser = await userService.delete(userId);

      ctx.body = deletedUser;
    } catch (error) {
      ctx.status = 400;
      ctx.body = { message: "Error deleting user", error };
    }
  }
}

export default new UserController();
