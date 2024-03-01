import { SendMessageToQueueService } from "../../../shared/application/service/send-message-to-queue.service";
import { Order } from "../../domain/entities/order";

export class CreateOrder {
  constructor(
    private readonly sendMessageToQueueService: SendMessageToQueueService
  ) {}
  async run(newOrder: Order): Promise<Order> {
    try {
      await this.sendMessageToQueueService.run(newOrder);
      return newOrder;
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  }
}
