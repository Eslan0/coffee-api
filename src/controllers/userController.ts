import { Context, Middleware } from "koa";
import userService from "../services/userService";

class userController {
// GET /users/:id - Search for a user by ID
  async show (ctx: Context){
    try {
      const userId = ctx.params.id;
      const user = await userService.getById(userId);

      ctx.body = user;
    } catch (error) {
      ctx.status = 400; // Validation error or malformed data
      ctx.body = { message: "Erro ao buscar usuário", error };
    }
  }

  // POST /users - Create a new user
  async create (ctx: Context) {
    try {
      const userData = ctx.request.body;
      const newUser = await userService.create(userData);

      ctx.body = newUser;
    } catch (error) {
      ctx.status = 400; // Validation error or malformed data
      ctx.body = { message: "Erro ao criar usuário", error };
    }
  }

  // PUT /users/:id - Update an existing user
  async update (ctx: Context) {
    try {
      const userId = ctx.params.id;
      const userData = ctx.request.body;
      const updatedUser = await userService.update(userId, userData);

      ctx.body = updatedUser;
    } catch (error) {
      ctx.status = 400; // Validation error or malformed data
      ctx.body = { message: "Erro ao atualizar usuário", error };
    }
  }

  // DELETE /users/:id - Delete an existing user
  async delete(ctx: Context) {
    try {
      const userId = ctx.params.id;
      const deletedUser = await userService.delete(userId);

      ctx.body = deletedUser;
    } catch (error) {
      ctx.status = 400; // Validation error or malformed data
      ctx.body = { message: "Erro ao excluir usuário", error };
    }
  }
};

export default new userController();
/*
import { Response, NextFunction } from "express";

import { followUserService, unFollowUserService } from "../services";
import { AuthenticatedRequestBody, IUser } from "../interfaces";

export const followUserController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) => followUserService(req, res, next);

export const unFollowUserController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) => unFollowUserService(req, res, next);
*/