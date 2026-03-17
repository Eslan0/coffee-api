import express from "express";
import { isAuth, productIdValidation } from "../middlewares/indexMiddlewares";
import { addProductToCartController, clearCartController, deleteProductFromCartController, getCartController } from "../controllers/indexControllers";

const router = express.Router();

router.get("/", isAuth, getCartController);
router.post("/", isAuth, productIdValidation, addProductToCartController);
router.delete("/clear-cart", isAuth, clearCartController);
router.post("/delete-item", isAuth, deleteProductFromCartController);

export = router;
