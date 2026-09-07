import { mapWithConcurrency } from './support.js'

export async function settle(orders: string[], pay: (id: string) => Promise<void>) {
  await mapWithConcurrency(orders, 10, pay)
}
