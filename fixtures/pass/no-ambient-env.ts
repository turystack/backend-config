import type { AppConfig } from './config.js'

export function baseUrl(config: AppConfig) {
  return config.apiUrl
}
