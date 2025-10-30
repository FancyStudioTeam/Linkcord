import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const { env } = process;
const { GITHUB_ACTIONS } = env;

// biome-ignore lint/style/noDefaultExport: Default exports are allowed for configuration files.
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
