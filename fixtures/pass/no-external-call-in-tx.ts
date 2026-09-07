declare const db: { transaction: (callback: () => Promise<void>) => Promise<void> }
declare function persist(receipt: unknown): Promise<void>

export async function run() {
  const receipt = await fetch('https://provider.example/charge')

  await db.transaction(async () => {
    await persist(receipt)
  })
}
