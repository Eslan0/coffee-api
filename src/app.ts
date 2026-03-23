import Koa from "koa";
import cors from "@koa/cors";
import helmet from "koa-helmet";
import bodyParser from "koa-bodyparser";
import envConfig from "./configs/variable";
import errorMiddleware from "./middlewares/error.middleware";
import limitMiddleware from "./middlewares/limit.middleware";
import apiRoutes from "./routes";

const app = new Koa();

// middlewares
const CORS = envConfig.CLIENT_URL;
app.use(cors({ origin: CORS }));
app.use(helmet({ contentSecurityPolicy: false })); // remove content-security-policy in production
app.use(bodyParser());
app.use(errorMiddleware());
app.use(limitMiddleware());

// api routes
app.use(apiRoutes.routes());

export default app;
