declare const logger: { error: (message: string, fields?: unknown) => void }
declare function charge(): Promise<void>

export async function run() {
  try {
    await charge()
  } catch (error) {
    logger.error('charge failed', { error })
  }
}
