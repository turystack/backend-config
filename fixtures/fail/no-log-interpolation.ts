export function log(logger: { info: (message: string) => void }, orderId: string) {
  logger.info(`order ${orderId} cancelled`)
}
