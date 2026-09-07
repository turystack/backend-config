declare const db: { transaction: (callback: () => Promise<void>) => Promise<void> }
declare const bus: { publish: (event: unknown) => Promise<void> }
declare function persist(): Promise<void>

export async function run() {
  await db.transaction(async () => {
    await persist()
    await bus.publish({ name: 'order.cancelled' })
  })
}
