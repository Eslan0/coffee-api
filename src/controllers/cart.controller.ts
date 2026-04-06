import cartService from "../services/cart.service";

export default class CartController {
  async create(ctx: Context) {
    const cart = await cartService.create(ctx.request.body);
    ctx.body = cart;
  }
}