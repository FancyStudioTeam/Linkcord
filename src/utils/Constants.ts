import { env } from "node:process";

///////////////////////////////////////////////////////////////////////////

export const IS_COMMON_JS = typeof require !== "undefined" && typeof module !== "undefined";
export const IS_PRODUCTION_ENVIRONMENT = String(env.NODE_ENV).toLowerCase() === "production";

///////////////////////////////////////////////////////////////////////////

export const LINKCORD_VERSION: string = "[VI]{{inject}}[/VI]";
