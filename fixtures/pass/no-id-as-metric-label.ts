export function count(metrics: any, plan: string) {
  metrics.increment('order.cancelled', { plan })
}
