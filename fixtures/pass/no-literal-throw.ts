import { exceptions } from './catalogue.js'

export function boom(orderId: string): never {
  throw new exceptions.order.alreadyPaid({ orderId })
}
