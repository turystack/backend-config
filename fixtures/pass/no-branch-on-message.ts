export function isConflict(error: { code: string }) {
  return error.code === 'order.already_paid'
}
