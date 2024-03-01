import { Order } from "../../../Order/domain/entities/order";

export interface BrokerRepository{
    connectionBroker(): Promise<any>;
    createChannel(): Promise<any>;
    sendMessageToQueue(order: Order): Promise<void>;
}