import { basename, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { IS_COMMON_JS } from "#utils/Constants.js";

async function importFile<ImportData>(path: string, options?: ImportFileOptions): Promise<ImportData> {
	const { requiredDefaultExport } = options ?? {
		requiredDefaultExport: false,
	};
	const data = await import(path);

	if (requiredDefaultExport && !("default" in data)) {
		throw new Error(`File '${basename(path)}' must include a 'default' export`);
	}

	return data;
}

function resolvePath(fragmentsOrPath: string[] | string, isCommonJS = IS_COMMON_JS): string {
	const path = join(...fragmentsOrPath);
	const resolvedPath = resolve(path);

	if (isCommonJS) {
		return resolvedPath;
	}

	const { href } = pathToFileURL(resolvedPath);

	return href;
}

export const ImportUtils = Object.freeze({
	importFile,
	resolvePath,
});

interface ImportFileOptions {
	requiredDefaultExport?: boolean;
}
