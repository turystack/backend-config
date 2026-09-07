const ADAPTERS: Record<string, number> = { stripe: 1 }

export function pick(provider: string) {
  return ADAPTERS[provider]
}
