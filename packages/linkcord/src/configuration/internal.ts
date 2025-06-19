import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";
import type { LinkcordOptions } from "./types.js";

// @ts-expect-error
export const options: LinkcordOptions = {};
const isCommonJS: boolean = typeof module !== "undefined";

const importModule = <Data>(module: string): Data => {
  if (isCommonJS) {
    return require(module);
  }

  // @ts-ignore
  return createRequire(import.meta.url)(module);
};

export const getConfig = (): Readonly<LinkcordOptions> => {
  if (!options) {
    throw new Error("Options have not been initialized yet.");
  }

  return options;
};

export const loadConfigFile = async (): Promise<void> => {
  const allowedExtensions = ["js", "cjs", "mjs", "ts", "cts", "mts"];

  for (const extension of allowedExtensions) {
    const configPath = join(process.cwd(), `linkcord.config.${extension}`);

    if (!existsSync(configPath)) {
      continue;
    }

    importModule(configPath);

    await Promise.resolve(undefined);
  }
};
