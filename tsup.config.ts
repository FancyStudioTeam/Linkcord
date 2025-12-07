import { defineConfig } from "tsup";
import replacePlugin from "unplugin-replace/esbuild";

export default defineConfig({
	clean: true,
	dts: true,
	entry: [
		"src/index.ts",
		"src/jsx-runtime.ts",
	],
	esbuildPlugins: [
		replacePlugin(),
	],
	format: "esm",
});
