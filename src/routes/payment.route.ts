import Router from "@koa/router";
import { createStripeCheckoutSessionValidation, isAuth } from "../middlewares/auth";
import { captureStripePaymentController, createStripeCheckoutController, getStripePublicKeyController } from "../controllers/payment.controller";

const router = new Router();

router.get("/strip-Key", isAuth, getStripePublicKeyController);
router.post("/capture-stripe-payment", isAuth, captureStripePaymentController);
router.post("/create-stripe-checkout-session", isAuth, createStripeCheckoutSessionValidation, createStripeCheckoutController);

export default router;
