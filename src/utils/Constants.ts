import { env } from "node:process";
import { AssertionUtils } from "./helpers/AssertionUtils.js";

const { isUndefined } = AssertionUtils;

export const IS_COMMON_JS = !(isUndefined(require) || isUndefined(module));
export const IS_PRODUCTION_ENVIRONMENT = String(env.NODE_ENV).toLowerCase() === "production";

export const LINKCORD_AGENT = `Linkcord (https://github.com/FancyStudioTeam/Linkcord)` as const;
export const LINKCORD_VERSION = /\[VI\]{{inject}}\[\/VI\]/;

export const ONE_SECOND_MILLISECONDS = 1_000;
