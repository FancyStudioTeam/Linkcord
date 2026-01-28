import { join } from 'node:path';
import { cwd } from 'node:process';

export function createDirectoryPath(root: string, directoryPath: string): string {
	return join(cwd(), root, directoryPath);
}
