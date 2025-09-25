import { LINKCORD_VERSION } from "#utils/Constants.js";

/**
 * The safe characters in URLs.
 * @group REST/Constants
 */
export const SAFE_CHARACTERS = new Set([":", "?", "@"]);

/**
 * The base URL of the Discord REST API.
 * @group REST/Constants
 */
export const REST_URL_BASE = "https://discord.com/api" as const;

/**
 * The user agent to use when making Discord API requests.
 * @group REST/Constants
 */
export const REST_USER_AGENT = `Linkcord/${LINKCORD_VERSION} (https://github.com/FancyStudioTeam/Linkcord, v${LINKCORD_VERSION})`;

/**
 * The version of the Discord REST API.
 * @group REST/Constants
 */
export const REST_VERSION = 10 as const;
