import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";

const PACKAGE_JSON_PATH = join(cwd(), "package.json");

export function getCurrentVersion(): string {
	const existsPackageFile = existsSync(PACKAGE_JSON_PATH);

	if (!existsPackageFile) {
		return "Invalid Version";
	}

	const packageDataString = readFileSync(PACKAGE_JSON_PATH, "utf-8");
	const packageDataJson = JSON.parse(packageDataString);

	const { version } = packageDataJson;

	return String(version);
}
