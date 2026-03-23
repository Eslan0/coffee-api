import Router from "@koa/router";
import OrderController from "../controllers/order.controller";

const router = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
router.get("/orders", OrderController.index);
router.get("/orders/:id", OrderController.show);
router.post("/orders", OrderController.create);
router.put("/orders/:id", OrderController.update);
router.delete("/orders/:id", OrderController.delete);
// news
/*
import { isAuth, orderIdValidation, processingOrderValidation } from "../middlewares/indexMiddlewares";
import { clearAllOrdersController, clearSingleOrderController, getInvoicesController, getOrderController, getOrdersController, postOrderController } from "../controllers/order.controller";
router.get("/", isAuth, getOrdersController);
router.get("/:orderId", isAuth, orderIdValidation, getOrderController);
router.post("/", isAuth, processingOrderValidation, postOrderController);
router.delete("/clear-orders", isAuth, clearAllOrdersController);
router.delete("/:orderId", isAuth, orderIdValidation, clearSingleOrderController);
router.get("/invoices/:orderId", isAuth, orderIdValidation, getInvoicesController);*/

export default router;
