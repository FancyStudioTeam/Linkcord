/*
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
*/
import { env } from "node:process";

/*
const packageJSONPath = resolve(cwd(), "package.json");
const packageJSONContent = readFileSync(packageJSONPath, "utf-8");
const packageJSONParsedContent = JSON.parse(packageJSONContent);

const { version } = packageJSONParsedContent;
*/

export const IS_COMMON_JS = typeof require !== "undefined" && typeof module !== "undefined";
export const IS_PRODUCTION_ENVIRONMENT = String(env.NODE_ENV).toLowerCase() === "production";

export const LINKCORD_AGENT = `Linkcord (https://github.com/FancyStudioTeam/Linkcord)` as const;
export const LINKCORD_VERSION: string = "[VI]{{inject}}[/VI]";

export const ONE_SECOND_MILLISECONDS = 1_000;
