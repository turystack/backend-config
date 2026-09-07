export async function run(work: () => Promise<void>) {
  try {
    await work()
  } catch (error) {
    throw error
  }
}
