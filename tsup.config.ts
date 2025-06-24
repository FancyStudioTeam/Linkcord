import { defineConfig } from "tsup";

export default [
  defineConfig({
    entry: ["src/index.ts"],
    format: "cjs",
    outDir: "dist/cjs",
  }),
  defineConfig({
    entry: ["src/index.ts"],
    format: "esm",
    outDir: "dist/esm",
  }),
];
