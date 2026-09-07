export function isConflict(error: { message: string }) {
  return error.message === 'order already paid'
}
