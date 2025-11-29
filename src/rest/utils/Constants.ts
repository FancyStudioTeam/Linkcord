import { LINKCORD_AGENT } from "#utils/Constants.js";

export const REST_URL_BASE = "https://discord.com/api" as const;
export const REST_USER_AGENT = LINKCORD_AGENT;
export const REST_VERSION = 10 as const;

export const SAFE_CHARACTERS = new Set([
	":",
	"?",
	"@",
]);
