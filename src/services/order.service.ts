import Order from "../models/order.model";

class OrderService {
  // Busca todos os pedidos
  async getAllOrders() {
    const orders = await Order.find();
    return orders;
  }

  // Busca um pedido pelo ID
  async getOrderById(orderId: string) {
    const order = await Order.findById(orderId);
    return order;
  }

  // Cria um novo pedido
  async createOrder(orderData: any) {
    const order = await Order.create(orderData);
    return order;
  }

  // Atualiza um pedido existente
  async updateOrder(orderId: string, orderData: any) {
    const order = await Order.findByIdAndUpdate(orderId, orderData, { new: true });
    return order;
  }

  // Exclui um pedido existente
  async deleteOrder(orderId: string) {
    const order = await Order.findByIdAndDelete(orderId);
    return order;
  }
}

export default new OrderService();
