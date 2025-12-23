import { env } from "node:process";
import { getCurrentVersion } from "./functions/getCurrentVersion.js";

export const IS_COMMON_JS = typeof require !== "undefined" && typeof module !== "undefined";
export const IS_PRODUCTION_ENVIRONMENT = String(env.NODE_ENV).toLowerCase() === "production";

export const LINKCORD_AGENT = "Linkcord (https://github.com/FancyStudioTeam/Linkcord)" as const;
export const LINKCORD_VERSION = getCurrentVersion();

export const ONE_SECOND_MILLISECONDS = 1_000;
