import { readFileSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";

export function getCurrentVersion(): string {
	const packagePath = join(cwd(), "package.json");

	const packageDataString = readFileSync(packagePath, "utf-8");
	const packageDataJSON = JSON.parse(packageDataString);

	const { version } = packageDataJSON;

	return String(version);
}
