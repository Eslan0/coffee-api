import "dotenv/config";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import connectDB from "./configs/database";
import errorMiddleware from "./middlewares/errorMiddleware";
import indexRoutes from "./routes/indexRoutes";

const app = new Koa();

// Middlewares
app.use(cors());
app.use(bodyParser());
app.use(errorMiddleware());

// API Routes
app.use(indexRoutes.routes());
app.use(indexRoutes.allowedMethods());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
