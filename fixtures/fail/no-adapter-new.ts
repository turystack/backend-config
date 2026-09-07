import { StripeAdapter } from './stripe.adapter.js'

export function pay() {
  const adapter = new StripeAdapter({})
  return adapter
}
