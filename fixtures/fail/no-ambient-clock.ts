export function isExpired(paidAt: number) {
  return Date.now() - paidAt > 72 * 3600 * 1000
}

export function startedNow() {
  return new Date()
}
