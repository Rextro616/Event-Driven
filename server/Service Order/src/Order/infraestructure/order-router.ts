import express from "express";
import { createOrderController } from "./dependencies";

const orderRouter = express.Router();

orderRouter
  .post("/", createOrderController.run.bind(createOrderController));
export { orderRouter };