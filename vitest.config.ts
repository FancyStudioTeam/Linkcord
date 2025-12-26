import { env } from 'node:process';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		tsconfigPaths({
			projects: [
				'tsconfig.json',
			],
		}),
	],
	test: {
		globals: true,
		reporters: env.GITHUB_ACTIONS
			? [
					'tree',
					'github-actions',
				]
			: [
					'tree',
				],
		typecheck: {
			enabled: true,
		},
	},
});
