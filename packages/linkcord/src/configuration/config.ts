import type { LinkcordOptions } from "./types.js";

// @ts-expect-error
export let options: LinkcordOptions = {};

export const defineConfig = (config: LinkcordOptions): Readonly<LinkcordOptions> => {
  options = {
    ...options,
    ...config,
  };

  Object.freeze(options);

  return options;
};
