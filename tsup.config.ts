import { defineConfig, type Options } from "tsup";

const defineSharedOptions = (options?: Options): Options => ({
  clean: true,
  entry: ["src/index.ts"],
  outDir: "dist",
  sourcemap: true,
  splitting: false,
  target: "esnext",
  ...options,
});

export default [
  defineConfig(
    defineSharedOptions({
      dts: true,
      format: "esm",
      outExtension: () => ({
        dts: ".d.ts",
        js: ".mjs",
      }),
    }),
  ),
  defineConfig(
    defineSharedOptions({
      format: "cjs",
      outExtension: () => ({
        js: ".js",
      }),
    }),
  ),
];
