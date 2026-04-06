import Order from "../models/order.model";

class OrderService {
  // list all orders
  async getAllOrders(userId: string) {
    const orders = await Order.find();
    return orders;
  }

  // search order by id
  async getOrderById(orderId: string) {
    const order = await Order.findById(orderId);
    return order;
  }

  // create a new order
  async createOrder(orderData: any) {
    const order = await Order.create(orderData);
    return order;
  }

  // update a existing order
  async updateOrder(orderId: string, orderData: any) {
    const order = await Order.findByIdAndUpdate(orderId, orderData, { new: true });
    return order;
  }

  // delete a existing order
  async deleteOrder(orderId: string) {
    const order = await Order.findByIdAndDelete(orderId);
    return order;
  }
}

export default new OrderService();
