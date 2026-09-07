export function pick(provider: string) {
  switch (provider) {
    case 'stripe':
      return 1
    default:
      return 0
  }
}
