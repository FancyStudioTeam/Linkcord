import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const configuration = defineConfig({
	plugins: [
		tsconfigPaths({
			projects: ["tsconfig.json"],
		}),
	],
	test: {
		reporters: ["verbose"],
	},
});

export default configuration;
