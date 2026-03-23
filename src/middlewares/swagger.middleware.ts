import { koaSwagger } from "koa2-swagger-ui";
import { swaggerSpec } from "../configs/swaggert";

// middleware for swagger
const swaggerMiddleware = () =>
  koaSwagger({
    routePrefix: "/docs",
    swaggerOptions: {
      spec: swaggerSpec as unknown as Record<string, unknown>, // swaggerJSDoc options
    },
  });

export default swaggerMiddleware;
