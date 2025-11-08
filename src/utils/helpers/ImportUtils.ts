import { basename, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { IS_COMMON_JS } from "#utils/Constants.js";

/* --------------------------------------------------------------------------- */

async function importFile<ImportData>(path: string, requiredDefaultExport?: boolean): Promise<ImportData> {
	const data = await import(path);

	if (requiredDefaultExport && !("default" in data)) {
		throw new Error(`File '${basename(path)}' must include a 'default' export`);
	}

	return data;
}

/* --------------------------------------------------------------------------- */

function resolvePath(fragments: string[], isCommonJS = IS_COMMON_JS): string {
	const path = join(...fragments);
	const resolvedPath = resolve(path);

	if (isCommonJS) {
		return resolvedPath;
	}

	const { href } = pathToFileURL(resolvedPath);

	return href;
}

/* --------------------------------------------------------------------------- */

export const ImportUtils = Object.freeze({
	importFile,
	resolvePath,
});
