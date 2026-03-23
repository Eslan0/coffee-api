import Router from "@koa/router";
import ProductController from "../controllers/product.controller";
import { uploadPhotos } from "../middlewares/upload.middleware";
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */
const router = new Router();

// Just the mapping: Route + HTTP Verb + Controller Function
router.get("/products", ProductController.index);
router.get("/products/:id", ProductController.show);
router.post("/products", uploadPhotos, ProductController.create);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);
// news
/*
import { isAuth, productsPaginationMiddleware, reviewProductValidation, top5AliasProductsMiddleware } from "../middlewares";
import { addReviewController, deleteReviewController, getProductController, getProductsController, getReviewsController } from "../controllers/indexControllers";
router.get("/", productsPaginationMiddleware(), getProductsController);
router.get("/top-5-cheap", top5AliasProductsMiddleware(), productsPaginationMiddleware(), getProductsController);
router.get("/:productId", getProductController);
router.put("/reviews", isAuth, reviewProductValidation, addReviewController);
router.get("/:productId", getProductController);
router.put("/reviews", isAuth, reviewProductValidation, addReviewController);
router
router.route("/reviews/:productId").delete(isAuth, deleteReviewController).get(getReviewsController);*/

export default router;
