export async function remove(db: any, orderId: string) {
  return db.orders.delete({ where: { orderId } })
}
