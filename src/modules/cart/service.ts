import Cart from "@/features/cart/model";

class CartService {
  getCart() {
    return Cart.find({});
  }
}

export default new CartService();
