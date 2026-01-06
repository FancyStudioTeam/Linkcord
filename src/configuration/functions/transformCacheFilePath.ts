import { join } from 'node:path';
import { cwd } from 'node:process';

export function transformCacheFilePath(filePath: string): string {
	return join(cwd(), filePath);
}
