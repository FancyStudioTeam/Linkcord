import { basename, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const IS_COMMON_JS = typeof require !== "undefined" && typeof module !== "undefined";

/**
 * Utility class for working with imports.
 * @group Utils/Helpers
 */
export class ImportUtils {
	/**
	 * Imports a file and returns the imported data.
	 *
	 * @param path - The path of the file to import.
	 * @param requiredDefaultExport - Whether the file must include a `default` export.
	 * @returns The imported data from the file.
	 *
	 * @typeParam ImportData - The data of the imported file.
	 */
	static async import<ImportData>(path: string, requiredDefaultExport?: boolean): Promise<ImportData> {
		const data = await import(path);

		if (requiredDefaultExport && !("default" in data)) {
			throw new TypeError(`File "${basename(path)}" must include a "default" export.`);
		}

		return data;
	}

	/**
	 * Resolves a path to a file for compatible with both CommonJS and ESM.
	 *
	 * @param fragments - The fragments of the path to resolve.
	 * @returns The resolved path compatible with both CommonJS and ESM.
	 */
	static resolvePath(...fragments: string[]): string {
		const path = join(...fragments);
		const resolvedPath = resolve(path);

		if (IS_COMMON_JS) {
			return resolvedPath;
		}

		const { href } = pathToFileURL(resolvedPath);

		return href;
	}
}
