import { env } from "node:process";

const { NODE_ENV } = env;

/**
 * Whether the current environment is a CommonJS environment.
 * @group Utils/Constants
 */
export const IS_COMMON_JS = typeof require !== "undefined" && typeof module !== "undefined";

/**
 * Whether the current environment is a production environment.
 * @group Utils/Constants
 */
export const IS_PRODUCTION_ENVIRONMENT = String(NODE_ENV).toLowerCase() === "production";

/**
 * The current version of Linkcord.
 * @group Utils/Constants
 */
export const LINKCORD_VERSION: string = "[VI]{{inject}}[/VI]";
