import { esbuildPluginVersionInjector } from "esbuild-plugin-version-injector";
import { defineConfig } from "tsup";

export default defineConfig({
    clean: true,
    dts: true,
    entry: ["src/index.ts"],
    esbuildPlugins: [esbuildPluginVersionInjector()],
    format: ["esm", "cjs"],
    sourcemap: true,
    splitting: false,
});
