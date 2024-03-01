export class Order {
  constructor(
    readonly name: string,
    readonly status: OrderStatus,
    readonly amount: number
  ) {}
}
