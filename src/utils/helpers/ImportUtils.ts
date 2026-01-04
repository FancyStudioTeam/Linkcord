import { basename, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { ImportFileOptions } from './ImportUtils.types.js';

const RESERVED_EXPORTS = [
	'default',
];

export async function importFile<ImportData>(path: string, options?: ImportFileOptions): Promise<ImportData> {
	const { requireDefault = false, requiredExports = [] } = options ?? {};
	const importedFileData = await import(path);

	if (requireDefault && !Reflect.has(importedFileData, 'default')) {
		throw new Error(`File '${basename(path)}' must include a default export`);
	}

	for (const namedExport of requiredExports) {
		if (RESERVED_EXPORTS.includes(namedExport)) {
			continue;
		}

		if (!Reflect.has(importedFileData, namedExport)) {
			throw new Error(`File '${basename(path)}' must include a named export named '${namedExport}'`);
		}
	}

	return importedFileData;
}

export function resolvePath(...fragments: string[]): string {
	const normalizedPath = join(...fragments);
	const { href } = pathToFileURL(normalizedPath);

	return href;
}
