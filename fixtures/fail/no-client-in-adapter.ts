import { StripeClient } from 'stripe'

export class PaymentAdapter {
  charge(amount: number) {
    const client = new StripeClient({ key: 'sk' })
    return client.charge(amount)
  }
}
