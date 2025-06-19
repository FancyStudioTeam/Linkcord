import { createRequire } from "node:module";

const isCommonJS: boolean = typeof module !== "undefined";

export const importModule = <Data>(module: string): Data => {
  if (isCommonJS) {
    return require(module);
  }

  // @ts-ignore
  return createRequire(import.meta.url)(module);
};
