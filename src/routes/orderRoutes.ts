import Router from "koa-router";
import orderController from "../controllers/orderController";
import { isAuth, orderIdValidation, processingOrderValidation } from "../middlewares/index";
import { clearAllOrdersController, clearSingleOrderController, getInvoicesController, getOrderController, getOrdersController, postOrderController } from "../controllers/order.controller";

const orderRoutes = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
orderRoutes.get("/orders", orderController.index);
orderRoutes.get("/orders/:id", orderController.show);
orderRoutes.post("/orders", orderController.create);
orderRoutes.put("/orders/:id", orderController.update);
orderRoutes.delete("/orders/:id", orderController.delete);
// news
orderRoutes.get("/", isAuth, getOrdersController);
orderRoutes.get("/:orderId", isAuth, orderIdValidation, getOrderController);
orderRoutes.post("/", isAuth, processingOrderValidation, postOrderController);
orderRoutes.delete("/clear-orders", isAuth, clearAllOrdersController);
orderRoutes.delete("/:orderId", isAuth, orderIdValidation, clearSingleOrderController);
orderRoutes.get("/invoices/:orderId", isAuth, orderIdValidation, getInvoicesController);

export default orderRoutes;
