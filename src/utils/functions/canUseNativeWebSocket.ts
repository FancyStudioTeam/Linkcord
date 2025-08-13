import { versions } from "node:process";
import satisfies from "semver/functions/satisfies.js";

const { node: NODE_JS_VERSION } = versions;
const MINIMUM_NODE_JS_VERSION = "22.4.0";

/**
 * Checks whether the native `WebSocket` class can be used.
 * @returns Whether the native `WebSocket` class can be used.
 */
export function canUseNativeWebSocket(): boolean {
	return satisfies(NODE_JS_VERSION, `>=${MINIMUM_NODE_JS_VERSION}`);
}
