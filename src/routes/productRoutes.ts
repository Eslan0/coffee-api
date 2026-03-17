import Router from "@koa/router";
import productController from "../controllers/productController";
import { uploadPhotos } from "../middlewares/uploadMiddleware";

const productRoutes = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
productRoutes.get("/products", productController.index);
productRoutes.get("/products/:id", productController.show);
productRoutes.post("/products", uploadPhotos, productController.create);
productRoutes.put("/products/:id", productController.update);
productRoutes.delete("/products/:id", productController.delete);
// news
/*
import { isAuth, productsPaginationMiddleware, reviewProductValidation, top5AliasProductsMiddleware } from "../middlewares";
import { addReviewController, deleteReviewController, getProductController, getProductsController, getReviewsController } from "../controllers/indexControllers";
productRoutes.get("/", productsPaginationMiddleware(), getProductsController);
productRoutes.get("/top-5-cheap", top5AliasProductsMiddleware(), productsPaginationMiddleware(), getProductsController);
productRoutes.get("/:productId", getProductController);
productRoutes.put("/reviews", isAuth, reviewProductValidation, addReviewController);
productRoutes.get("/:productId", getProductController);
productRoutes.put("/reviews", isAuth, reviewProductValidation, addReviewController);

productRoutes.route("/reviews/:productId").delete(isAuth, deleteReviewController).get(getReviewsController);*/

export default productRoutes;
