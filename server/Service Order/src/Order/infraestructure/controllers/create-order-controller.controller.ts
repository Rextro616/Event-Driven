import { Request, Response } from "express";
import { CreateOrder } from "../../application/services/create-order.service";

export class CreateOrderController {
  constructor(readonly createOrder: CreateOrder) {}

  async run(req: Request, res: Response) {
    try {
      const order = req.body;
      const result = await this.createOrder.run(order);
      console.log(result);
      res.status(200).send(result);
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
