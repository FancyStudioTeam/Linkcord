import { LINKCORD_VERSION } from "../../index.js";

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
export const USER_AGENT =
  `Linkcord/${LINKCORD_VERSION} (https://github.com/FancyStudioTeam/Linkcord)` as const;
