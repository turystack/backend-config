declare const db: { transaction: (callback: () => Promise<void>) => Promise<void> }

export async function run() {
  await db.transaction(async () => {
    await fetch('https://provider.example/charge')
  })
}
