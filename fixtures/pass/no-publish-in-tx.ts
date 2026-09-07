declare const db: { transaction: (callback: () => Promise<void>) => Promise<void> }
declare const bus: { publish: (event: unknown) => void }
declare function persist(): Promise<void>

export async function run() {
  await db.transaction(async () => {
    await persist()
  })

  bus.publish({ name: 'order.cancelled' })
}
