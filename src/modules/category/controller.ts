import { Context } from "hono";
//import categoryService from "@/modules/categories";

export class categoryController {
  static async index(c: Context) {
    const id = c.req.param("id");
    const body = await c.req.json();
  }

  static async create(c: Context) {
    const id = c.req.param("id");
    const body = await c.req.json();
  }

  static async update(c: Context) {
    const id = c.req.param("id");
    const body = await c.req.json();

    // ...
  }

  static async delete(c: Context) {
    const id = c.req.param("id");
    const body = await c.req.json();

    // ...
  }
}