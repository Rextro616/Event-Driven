import { Order } from "../../../Order/domain/entities/order";
import { BrokerRepository } from "../../domain/repository/broker-repository";

export class SendMessageToQueueService {
    constructor(private readonly brokerRepository: BrokerRepository) {}
    async run(data: Order) {
      try {
        this.brokerRepository.sendMessageToQueue(data);
      } catch (err: any) {
        throw new Error(err);
      }
    }
  }