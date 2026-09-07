import type { PaymentPort } from './payment.port.js'

export function pay(adapter: PaymentPort) {
  return adapter
}
