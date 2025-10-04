import { env } from "node:process";

/**
 * Whether the current environment is a CommonJS environment.
 * @group Utils/Constants
 */
export const IS_COMMON_JS = typeof require !== "undefined" && typeof module !== "undefined";

/**
 * Whether the current environment is a production environment.
 * @group Utils/Constants
 */
export const IS_PRODUCTION_ENVIRONMENT = String(env.NODE_ENV).toLowerCase() === "production";

/**
 * The current version of Linkcord.
 * @group Utils/Constants
 */
export const LINKCORD_VERSION: string = "[VI]{{inject}}[/VI]";
