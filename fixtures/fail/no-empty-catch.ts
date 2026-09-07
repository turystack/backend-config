export async function quiet(run: () => Promise<void>) {
  try { await run() } catch { }
}
