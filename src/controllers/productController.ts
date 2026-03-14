import { Context } from "koa";
import productService from "../services/productService";

class productController {
  // GET /products - Product list
  async index(ctx: Context) {
    try {
      ctx.body = await productService.getAll();
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao buscar produtos" };
    }
  }

  // GET /products/:id - Search for a product by ID
  async show(ctx: Context) {
    try {
      const product = await productService.getById(ctx.params.id);
      if (!product) {
        ctx.status = 404;
        ctx.body = { message: "Produto não encontrado" };
        return;
      }
      ctx.body = product;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao buscar produto" };
    }
  }

  // POST /products - Create a new product
  async create(ctx: Context) {
    try {
      ctx.body = await productService.create(ctx.request.body);
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao criar produto" };
    }
  }

  // PUT /products/:id - Update an existing product
  async update(ctx: Context) {
    try {
      const product = await productService.update(ctx.params.id, ctx.request.body);
      if (!product) {
        ctx.status = 404;
        ctx.body = { message: "Produto não encontrado" };
        return;
      }
      ctx.body = product;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao atualizar produto" };
    }
  }

  // DELETE /products/:id - Delete an existing product
  async delete(ctx: Context) {
    try {
      const product = await productService.delete(ctx.params.id);
      if (!product) {
        ctx.status = 404;
        ctx.body = { message: "Produto não encontrado" };
        return;
      }
      ctx.body = product;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao excluir produto" };
    }
  }
}

export default new productController();
