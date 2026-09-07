import { coverage, FLOOR } from '@turystack/config/vitest'
import { defineConfig } from 'vitest/config'

/**
 * The default test configuration for a Turystack backend.
 *
 * Two decisions are deliberate and both are gates rather than preferences:
 *
 * - **No `passWithNoTests`.** A suite that passes with zero tests is a gate
 *   that cannot fail, which is worse than no gate at all because it is green.
 * - **Coverage floors.** 85% on the codebase; the delivery report holds the
 *   higher floor on the lines a task changed, because old code has history and
 *   new code has none. The number lives in `@turystack/config`, so a backend
 *   and a frontend cannot drift to two different floors.
 */
export { FLOOR }

export function backend(overrides = {}) {
	return defineConfig({
		test: {
			coverage: coverage({
				// Composition roots: a module that registers providers and a script
				// that runs one operation decide nothing, and a test for either
				// asserts that the wiring is the wiring.
				exclude: [
					'**/*.config.ts',
					'**/*.mock.ts',
					'**/*.module.ts',
					'**/*.types.ts',
					'**/main.ts',
					'**/seed.ts',
				],
			}),
			passWithNoTests: false,
			...overrides,
		},
	})
}

/**
 * End-to-end: no mocks, real backing services (ARC-TST-4), in its own config so
 * the default suite neither needs Docker nor pays for it (ARC-TST-6).
 */
export function backendE2e(overrides = {}) {
	return defineConfig({
		test: {
			fileParallelism: false,
			include: ['**/*.e2e.test.ts'],
			passWithNoTests: false,
			testTimeout: 30_000,
			...overrides,
		},
	})
}
