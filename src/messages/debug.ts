/**
 * biome-ignore-all lint/style/useNamingConvention: These functions
 * intentionally use upper snake case because they represent debug messages,
 * not conventional camel case functions.
 */

import { basename } from 'node:path';

export function COMMANDS_CACHE_FILE_NOT_FOUND(filePath: string) {
	return `Commands cache file '${basename(filePath)}' has not been found. Creating cache file...`;
}
