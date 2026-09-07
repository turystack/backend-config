export function log(
  logger: { info: (message: string, fields: object) => void },
  orderId: string,
) {
  logger.info('order.cancelled', { orderId })
}
