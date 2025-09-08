import { LINKCORD_VERSION } from "../../index.js";

/**
 * @public
 */
export const HTTP_STATUS_CODES = {
	NO_CONTENT: 204,
	TOO_MANY_REQUESTS: 429,
};

/**
 * @public
 */
export const REST_URL_BASE = "https://discord.com/api/v10";

/**
 * @public
 */
export const REST_VERSION = 10;

/**
 * @public
 */
export const SAFE_CHARACTERS = new Set([":", "?", "@"]);

/**
 * @public
 */
export const USER_AGENT = `Linkcord/${LINKCORD_VERSION} (https://github.com/FancyStudioTeam/Linkcord)` as const;
