
import { CreateOrder } from "../application/services/create-order.service";
import { CreateOrderController } from "./controllers/create-order-controller.controller";
import { AMQPLibRepository } from "../../shared/infraestructure/AMQPLibRepository/amqp-repository";
import { SendMessageToQueueService } from "../../shared/application/service/send-message-to-queue.service";

const amqpLibRepository = new AMQPLibRepository();

const sendMessageToQueueService = new SendMessageToQueueService(amqpLibRepository);

const createOrder = new CreateOrder(sendMessageToQueueService);

export const createOrderController = new CreateOrderController(
  createOrder
);

