import { NextFunction, Response } from "express";
import { AuthenticatedRequestBody, IUser, ProcessingStripeCheckoutT } from "../interfaces/indexInterfaces";
import { captureStripePaymentService, createStripeCheckoutSessionService, getStripePublicKeyService } from "../services/indexServices";

export const getStripePublicKeyController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) => getStripePublicKeyService(req, res, next);

export const captureStripePaymentController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) => captureStripePaymentService(req, res, next);

export const createStripeCheckoutController = (req: AuthenticatedRequestBody<ProcessingStripeCheckoutT>, res: Response, next: NextFunction) => createStripeCheckoutSessionService(req, res, next);
