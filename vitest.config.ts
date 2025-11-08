import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const { env } = process;
const { GITHUB_ACTIONS } = env;

export default defineConfig({
	plugins: [
		tsconfigPaths({
			projects: ["tsconfig.json"],
		}),
	],
	test: {
		globals: true,
		reporters: GITHUB_ACTIONS ? ["verbose", "github-actions"] : ["verbose"],
		typecheck: {
			enabled: true,
		},
	},
});
