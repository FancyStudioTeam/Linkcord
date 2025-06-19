import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";
import { options } from "./config.js";
import type { LinkcordOptions } from "./types.js";

const isCommonJS: boolean = typeof module !== "undefined";

export const getConfig = (): Readonly<LinkcordOptions> => options;

const _require = <Data>(module: string): Data =>
  // @ts-ignore
  isCommonJS ? require(module) : createRequire(import.meta.url)(module);

export const loadConfigFile = async (): Promise<void> => {
  const allowedExtensions = ["js", "cjs", "mjs", "ts", "cts", "mts"];

  for (const extension of allowedExtensions) {
    const configPath = join(process.cwd(), `linkcord.config.${extension}`);

    if (!existsSync(configPath)) {
      continue;
    }

    _require(configPath);

    await Promise.resolve();
  }
};
