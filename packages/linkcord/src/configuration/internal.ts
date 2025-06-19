import { existsSync } from "node:fs";
import { join } from "node:path";
import { importModule } from "../utils/functions/importModule.js";
import type { LinkcordOptions } from "./types.js";

// @ts-expect-error
export const options: LinkcordOptions = {};

export const getConfig = (): Readonly<LinkcordOptions> => options;

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
