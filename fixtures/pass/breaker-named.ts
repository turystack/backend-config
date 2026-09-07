export class StripeAdapter {
  @CircuitBreaker({ name: 'stripe' })
  async charge() {}
}
