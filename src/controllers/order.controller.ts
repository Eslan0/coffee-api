import { Context } from "koa";
import orderService from "../services/order.service";

class OrderController {
  // get /orders - order list
  async index(ctx: Context) {
    try {
      const orders = await orderService.getAllOrders();
      ctx.body = orders;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Error when searching for orders" };
    }
  }

  // get /orders/:id - search for an order by ID
  async show(ctx: Context) {
    try {
      const orderId = ctx.params.id;
      const order = await orderService.getOrderById(orderId);
      ctx.body = order;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Error when searching for order" };
    }
  }

  // post /orders - create a new order
  async create(ctx: Context) {
    try {
      const orderData = ctx.request.body;
      const newOrder = await orderService.createOrder(orderData);
      ctx.body = newOrder;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Error creating order" };
    }
  }

  // put /orders/:id - update an existing order
  async update(ctx: Context) {
    try {
      const orderId = ctx.params.id;
      const orderData = ctx.request.body;
      const updatedOrder = await orderService.updateOrder(orderId, orderData);
      ctx.body = updatedOrder;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Error updating order" };
    }
  }

  // delete /orders/:id - delete an existing order
  async delete(ctx: Context) {
    try {
      const orderId = ctx.params.id;
      const deletedOrder = await orderService.deleteOrder(orderId);
      ctx.body = deletedOrder;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Error deleting order" };
    }
  }
}

export default new OrderController();
