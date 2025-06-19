import { createRequire } from "./createRequire.js";

export const requireModule = <Data>(module: string): Data => createRequire()(module);
