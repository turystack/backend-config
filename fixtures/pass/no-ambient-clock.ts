export function isExpired(paidAt: number, now: number) {
  return now - paidAt > 72 * 3600 * 1000
}

// A constructed instant is not a clock read: it is exactly what ARC-TOP-7 asks
// an operation to receive, and a test that fixes one is the reason the law
// exists. Only the argument-less `new Date()` reaches for the runtime.
export const EPOCH = new Date('2026-01-01T00:00:00.000Z')
export const FROM_MILLIS = new Date(0)
