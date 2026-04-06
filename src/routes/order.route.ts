import Router from "@koa/router";
import OrderController from "../controllers/order.controller";
import { verifyToken } from "../middlewares/auth.middleware";
import { isAdmin } from "../middlewares/role.middleware";

const router = new Router();

router.get("/orders", verifyToken, isAdmin, OrderController.index);
router.get("/orders/:id", verifyToken, isAdmin, OrderController.show);
router.get("/orders/my/:phone", OrderController.getMyOrders);
router.patch("/orders/:id/status", verifyToken, isAdmin, OrderController.updateStatus);
router.put("/orders/:id", verifyToken, isAdmin, OrderController.update);
router.delete("/orders/:id", verifyToken, isAdmin, OrderController.delete);

router.post("/checkout", OrderController.create);

export default router;
