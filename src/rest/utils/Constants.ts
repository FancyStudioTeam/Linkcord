import { LINKCORD_VERSION } from "#utils/Constants.js";

export const SAFE_CHARACTERS = new Set([":", "?", "@"]);

export const REST_URL_BASE = "https://discord.com/api" as const;
export const REST_USER_AGENT = `Linkcord (https://github.com/FancyStudioTeam/Linkcord, v${LINKCORD_VERSION})` as const;
export const REST_VERSION = 10 as const;
