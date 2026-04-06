import Cart from "../models/cart.model";

class CartService {
  getCart() {
    return Cart.find({});
  }
}

export default new CartService();
