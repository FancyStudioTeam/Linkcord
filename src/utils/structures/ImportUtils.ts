import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const IS_COMMON_JS = typeof require !== "undefined" && typeof module !== "undefined";

/**
 * Resolves a path to a file for compatibility with both CommonJS and ESM.
 * @param fragments - The fragments of the path to resolve.
 * @returns The resolved path compatible with both CommonJS and ESM.
 */
function resolvePath(...fragments: string[]): string {
	const path = join(...fragments);
	const resolvedPath = resolve(path);

	if (IS_COMMON_JS) {
		return resolvedPath;
	}

	const { href } = pathToFileURL(resolvedPath);

	return href;
}

/**
 * Namespace for import utilities.
 * @internal
 */
export const ImportUtils = {
	resolvePath,
};
