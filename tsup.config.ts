import { esbuildPluginVersionInjector } from "esbuild-plugin-version-injector";
import { defineConfig } from "tsup";

// biome-ignore lint/style/noDefaultExport: Default exports are allowed for configuration files.
export default defineConfig({
	clean: true,
	dts: true,
	entry: ["src/index.ts", "src/jsx/jsx-runtime.ts"],
	esbuildPlugins: [esbuildPluginVersionInjector()],
	format: "esm",
});
