export async function run(work: () => Promise<void>, logger: any) {
  try {
    await work()
  } catch (error) {
    logger.error('failed', { error })
    throw error
  }
}
