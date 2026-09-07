export async function handle(run: () => Promise<void>) {
  try {
    await run()
  } catch {
    return null
  }
}
