import Koa from "koa";
import cors from "@koa/cors";
import helmet from "koa-helmet";
import bodyParser from "koa-bodyparser";
import envConfig from "./configs/variable";
import connectDB from "./configs/database";
import errorMiddleware from "./middlewares/errorMiddleware";
import limitMiddleware from "./middlewares/limitMiddleware";
import indexRoutes from "./routes/indexRoutes";

const app = new Koa();

// middlewares
const CORS = envConfig.CLIENT_URL;
app.use(cors({ origin: CORS }));
app.use(helmet());
app.use(bodyParser());
app.use(errorMiddleware());
app.use(limitMiddleware());

// api routes
app.use(indexRoutes.routes());
app.use(indexRoutes.allowedMethods());

// start the server
const PORT = envConfig.API_URL;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
