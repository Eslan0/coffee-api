import Router from "@koa/router";
import OrderController from "../controllers/orderController";

const orderRoutes = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
orderRoutes.get("/orders", OrderController.index);
orderRoutes.get("/orders/:id", OrderController.show);
orderRoutes.post("/orders", OrderController.create);
orderRoutes.put("/orders/:id", OrderController.update);
orderRoutes.delete("/orders/:id", OrderController.delete);
// news
/*
import { isAuth, orderIdValidation, processingOrderValidation } from "../middlewares/indexMiddlewares";
import { clearAllOrdersController, clearSingleOrderController, getInvoicesController, getOrderController, getOrdersController, postOrderController } from "../controllers/order.controller";
orderRoutes.get("/", isAuth, getOrdersController);
orderRoutes.get("/:orderId", isAuth, orderIdValidation, getOrderController);
orderRoutes.post("/", isAuth, processingOrderValidation, postOrderController);
orderRoutes.delete("/clear-orders", isAuth, clearAllOrdersController);
orderRoutes.delete("/:orderId", isAuth, orderIdValidation, clearSingleOrderController);
orderRoutes.get("/invoices/:orderId", isAuth, orderIdValidation, getInvoicesController);*/

export default orderRoutes;
