import { options } from "./internal.js";
import type { LinkcordOptions } from "./types.js";

export const defineConfig = (config: LinkcordOptions): Readonly<LinkcordOptions> => {
  Object.assign(options, config);
  Object.freeze(options);

  return options;
};
