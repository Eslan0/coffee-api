import { Context } from "koa";
import orderService from "../services/orderService";

class orderController {
  // GET /orders - Order list
  async index(ctx: Context) {
    try {
      const orders = await orderService.getAllOrders();
      ctx.body = orders;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao buscar pedidos" };
    }
  }

  // GET /orders/:id - Search for an order by ID
  async show(ctx: Context) {
    try {
      const orderId = ctx.params.id;
      const order = await orderService.getOrderById(orderId);
      ctx.body = order;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao buscar pedido" };
    }
  }

  // POST /orders - Create a new order
  async create(ctx: Context) {
    try {
      const orderData = ctx.request.body;
      const newOrder = await orderService.createOrder(orderData);
      ctx.body = newOrder;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao criar pedido" };
    }
  }

  // PUT /orders/:id - Update an existing order
  async update(ctx: Context) {
    try {
      const orderId = ctx.params.id;
      const orderData = ctx.request.body;
      const updatedOrder = await orderService.updateOrder(orderId, orderData);
      ctx.body = updatedOrder;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao atualizar pedido" };
    }
  }

  // DELETE /orders/:id - Delete an existing order
  async delete(ctx: Context) {
    try {
      const orderId = ctx.params.id;
      const deletedOrder = await orderService.deleteOrder(orderId);
      ctx.body = deletedOrder;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao excluir pedido" };
    }
  }
}

export default new orderController();
/*
import { NextFunction, Response } from "express";

import { AuthenticatedRequestBody, IUser, ProcessingOrderT } from "../interfaces";
import { clearAllOrdersService, clearSingleOrderService, getInvoicesService, getOrderService, getOrdersService, postOrderService } from "@src/services";

export const getOrdersController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) => getOrdersService(req, res, next);
export const getOrderController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) => getOrderService(req, res, next);

export const postOrderController = (req: AuthenticatedRequestBody<ProcessingOrderT>, res: Response, next: NextFunction) => postOrderService(req, res, next);

export const clearSingleOrderController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) => clearSingleOrderService(req, res, next);

export const clearAllOrdersController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) => clearAllOrdersService(req, res, next);

export const getInvoicesController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) => getInvoicesService(req, res, next);
*/