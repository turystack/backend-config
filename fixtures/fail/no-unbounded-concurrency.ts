export async function settle(orders: string[], pay: (id: string) => Promise<void>) {
  await Promise.all(orders.map((order) => pay(order)))
}
