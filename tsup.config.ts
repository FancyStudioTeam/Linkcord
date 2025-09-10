import { esbuildPluginVersionInjector } from "esbuild-plugin-version-injector";
import { defineConfig } from "tsup";

const configuration = defineConfig({
	clean: true,
	dts: true,
	entry: ["src/index.ts", "src/jsx/jsx-runtime.ts"],
	esbuildPlugins: [esbuildPluginVersionInjector()],
	format: "esm",
});

export default configuration;
