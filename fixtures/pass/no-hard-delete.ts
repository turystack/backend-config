export async function remove(db: any, orderId: string, now: Date) {
  return db.orders.update({ data: { deletedAt: now }, where: { orderId } })
}
