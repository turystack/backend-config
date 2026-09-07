export function message(error: unknown) {
  return (error as Error).message
}
