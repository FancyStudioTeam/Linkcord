import { basename, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { IS_COMMON_JS } from "#utils/Constants.js";

/**
 * Utility class for working with imports.
 *
 * @group Utils/Helpers
 */
export class ImportUtils {
	/**
	 * Imports a file and returns its imported data.
	 *
	 * @param path - The path of the file to import.
	 * @param requiredDefaultExport - Whether the file must include a `default` export.
	 *
	 * @returns The data of the import of the file.
	 *
	 * @typeParam ImportData - The shape of the data of the import.
	 */
	static async import<ImportData>(path: string, requiredDefaultExport?: boolean): Promise<ImportData> {
		const data = await import(path);

		if (requiredDefaultExport && !("default" in data)) {
			throw new Error(`File "${basename(path)}" must include a "default" export`);
		}

		return data;
	}

	/**
	 * Resolves a path to a file compatible with both CommonJS and ESModules environments.
	 *
	 * @param fragments - The fragments of the path to resolve.
	 *
	 * @returns The resolved path compatible with both CommonJS and ESModules environments.
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
