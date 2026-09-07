import type { StripeClient } from 'stripe'

export class PaymentAdapter {
  constructor(private readonly client: StripeClient) {}

  charge(amount: number) {
    return this.client.charge(amount)
  }
}
