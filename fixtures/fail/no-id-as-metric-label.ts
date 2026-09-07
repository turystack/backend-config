export function count(metrics: any, organizationId: string) {
  metrics.increment('order.cancelled', { organizationId })
}
