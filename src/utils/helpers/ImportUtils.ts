import { basename, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const IS_COMMON_JS = typeof require !== "undefined" && typeof module !== "undefined";

/**
 * Imports a file and returns the imported data.
 * @param path - The path of the file to import.
 * @param requiredDefaultExport - Whether the file must include a default
 * 	export.
 * @returns The imported data.
 */
async function _import<ImportData>(
	path: string,
	requiredDefaultExport?: boolean,
): Promise<ImportData> {
	const data = await import(path);

	if (requiredDefaultExport && !("default" in data)) {
		throw new Error(`File "${basename(path)}" must include a "default" export.`);
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

/** Utilities for importing files. */
export const ImportUtils = Object.freeze({
	import: _import,
	resolvePath,
});
