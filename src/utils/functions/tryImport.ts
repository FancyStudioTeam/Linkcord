/**
 * Attempts to import a package if it is installed.
 *
 * @param packageName - The name of the package to import.
 * @returns The data of the package, or `null` if the package is not installed.
 *
 * @typeParam PackageData - The data of the imported package.
 * @group Utils/Functions
 */
export async function tryImport<PackageData>(packageName: string): Promise<PackageData | null> {
	try {
		return await import(packageName);
	} catch {
		return null;
	}
}
