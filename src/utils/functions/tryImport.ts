export async function tryImport<PackageData>(packageName: string): Promise<PackageData | null> {
	try {
		return await import(packageName);
	} catch {
		return null;
	}
}
