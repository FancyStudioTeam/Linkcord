import { createRequire as moduleCreateRequire } from "node:module";

export const createRequire = (): NodeJS.Require => {
  try {
    return require;
  } catch {
    // @ts-ignore
    return moduleCreateRequire(import.meta.url);
  }
};
