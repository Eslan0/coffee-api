import Router from "@koa/router";
import ProductController from "../controllers/productController";
import { uploadPhotos } from "../middlewares/uploadMiddleware";

const productRoutes = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
productRoutes.get("/products", ProductController.index);
productRoutes.get("/products/:id", ProductController.show);
productRoutes.post("/products", uploadPhotos, ProductController.create);
productRoutes.put("/products/:id", ProductController.update);
productRoutes.delete("/products/:id", ProductController.delete);
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
