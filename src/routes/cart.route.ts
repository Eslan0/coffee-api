import Router from "@koa/router";

const router = new Router();

router.get("/cart");
router.post("/cart/items");
router.patch("/cart/items/:productId");
router.delete("/cart/items/:productId");
router.delete("/cart");

export default router;
