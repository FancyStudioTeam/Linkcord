import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const { env } = process;
const { GITHUB_ACTIONS } = env;

const configuration = defineConfig({
	plugins: [
		tsconfigPaths({
			projects: ["tsconfig.json"],
		}),
	],
	test: {
		globals: true,
		reporters: GITHUB_ACTIONS ? ["verbose", "github-actions"] : ["verbose"],
	},
});

export default configuration;
