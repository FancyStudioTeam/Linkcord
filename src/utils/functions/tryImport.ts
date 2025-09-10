/**
 * Attempts to import a package if it is installed.
 *
 * @param packageName - The name of the package to import.
 * @returns The data of the package, or `null` if the package is not installed.
 *
 * @typeParam ImportData - The data of the package.
 * @group Utils/Functions
 */
export async function tryImport<ImportData>(packageName: string): Promise<ImportData | null> {
	try {
		return await import(packageName);
	} catch {
		return null;
	}
}
