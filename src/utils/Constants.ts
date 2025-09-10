import { env } from "node:process";

const { NODE_ENV } = env;

/**
 * Checks whether the current environment is a production environment.
 * @group Utils/Constants
 */
export const IS_PRODUCTION_ENVIRONMENT = String(NODE_ENV).toLowerCase() === "production";
