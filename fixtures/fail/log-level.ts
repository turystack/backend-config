declare const logger: { info: (message: string, fields?: unknown) => void }
declare function charge(): Promise<void>

export async function run() {
  try {
    await charge()
  } catch (error) {
    logger.info('charge failed', { error })
    throw error
  }
}
