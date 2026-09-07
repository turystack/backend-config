export async function loud(run: () => Promise<void>) {
  try {
    await run()
  } catch (error) {
    throw error
  }
}
