import { basename, join } from "node:path";
import { pathToFileURL } from "node:url";
import type { ImportFileOptions } from "./ImportUtils.types.js";

export async function importFile<ImportData>(path: string, options?: ImportFileOptions): Promise<ImportData> {
	const { requiredDefaultExport } = options ?? {
		requiredDefaultExport: false,
	};

	const data = await import(path);

	if (requiredDefaultExport && !("default" in data)) {
		throw new Error(`File '${basename(path)}' must include a 'default' export`);
	}

	return data;
}

export function resolvePath(...fragments: string[]): string {
	const normalizedPath = join(...fragments);
	const { href } = pathToFileURL(normalizedPath);

	return href;
}
