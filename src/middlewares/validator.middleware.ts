import { Context, Next } from "koa";
import Joi from "joi";

// middleware for validation
const validatorMiddleware = (schema: Joi.ObjectSchema) => {
  return async (ctx: Context, next: Next) => {
    const { error, value } = schema.validate(ctx.request.body, {
      abortEarly: false,  // include all errors
      allowUnknown: true, // ignore unknown properties
      stripUnknown: true, // remove unknown properties
    });

    if (error) {
      return ctx.throw(422, error.details[0].message);
    }

    // replace the body with the sanitized value (stripUnknown)
    ctx.request.body = value;

    await next();
  };
};

export default validatorMiddleware;
