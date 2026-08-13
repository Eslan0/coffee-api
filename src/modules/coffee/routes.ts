import { Hono } from "hono";

//import { CoffeeController } from "@/coffee.controller";

const coffeeRoutes = new Hono();

coffeeRoutes.get("/", (c) => c.json("Hono!"));
/*coffeeRoutes.get("/", CoffeeController.list);
coffeeRoutes.get("/:id", CoffeeController.getById);
coffeeRoutes.post("/", CoffeeController.create);
coffeeRoutes.put("/:id", CoffeeController.update);
coffeeRoutes.delete("/:id", CoffeeController.remove);*/

export { coffeeRoutes };
