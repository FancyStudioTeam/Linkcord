import { esbuildPluginVersionInjector } from "esbuild-plugin-version-injector";
import { defineConfig } from "tsup";

const buildConfiguration = defineConfig({
	clean: true,
	dts: true,
	entry: ["src/index.ts"],
	esbuildPlugins: [esbuildPluginVersionInjector()],
	format: ["esm", "cjs"],
	sourcemap: true,
	splitting: false,
});

const jsxRuntimeConfiguration = defineConfig({
	clean: true,
	dts: true,
	entry: ["src/jsx/runtime.ts"],
	format: ["esm", "cjs"],
	outDir: "dist/jsx-runtime",
	sourcemap: true,
	splitting: false,
});

const configuration = [buildConfiguration, jsxRuntimeConfiguration];

export default configuration;
