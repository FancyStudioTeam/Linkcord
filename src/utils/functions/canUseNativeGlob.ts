import { versions } from "node:process";
import satisfies from "semver/functions/satisfies.js";

const { node: NODE_JS_VERSION } = versions;
// Glob methods were added in Node.js 22.0.0, but all available options were
// added in Node.js 22.14.0. (Options such "exclude", "withFileTypes"...)
const MINIMUM_NODE_JS_VERSION = "22.14.0";

/**
 * Checks whether the native `Glob` methods can be used.
 * @returns Whether the native `Glob` methods can be used.
 */
export function canUseNativeGlob(): boolean {
	return satisfies(NODE_JS_VERSION, `>=${MINIMUM_NODE_JS_VERSION}`);
}
