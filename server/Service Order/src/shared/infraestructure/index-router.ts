import { Request, Response, Router } from "express";
import { orderRouter } from "../../Order/infraestructure/order-router";

const indexRouter = Router();
const prefix = "/rex";

indexRouter.use(`${prefix}/order`, orderRouter);

indexRouter.get(prefix, (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

export default indexRouter;

