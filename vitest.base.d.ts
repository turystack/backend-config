import type { ViteUserConfig } from 'vitest/config'

/**
 * The coverage floor a Turystack backend is held to.
 */
export declare const FLOOR: number

/**
 * The default test configuration for a Turystack backend.
 *
 * `overrides` is merged into Vitest's `test` block, which is why it is typed as
 * that block rather than as a whole Vite config.
 */
export declare function backend(
	overrides?: ViteUserConfig['test'],
): ViteUserConfig

/**
 * End-to-end: no mocks, real backing services, in its own config so the default
 * suite neither needs Docker nor pays for it.
 */
export declare function backendE2e(
	overrides?: ViteUserConfig['test'],
): ViteUserConfig
