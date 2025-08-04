import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { MISSING_DEFAULT_EXPORT_FROM_FILE } from "#errors/messages.js";

const IS_COMMON_JS = typeof require !== "undefined" && typeof module !== "undefined";

/**
 * Imports a file and returns the imported data.
 * @param path - The path of the file to import.
 * @param requiredDefaultExport - Whether the file must include a default
 * export.
 * @returns The imported data.
 */
async function _import<ImportData>(
	path: string,
	requiredDefaultExport?: boolean,
): Promise<ImportData> {
	const data = await import(path);

	if (requiredDefaultExport && !("default" in data)) {
		throw new Error(MISSING_DEFAULT_EXPORT_FROM_FILE(path));
	}

	return data;
}

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
	import: _import,
	resolvePath,
};
