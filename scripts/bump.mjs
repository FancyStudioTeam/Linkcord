// @ts-check

/**
 * biome-ignore-all lint/correctness/noUnreachable: Project is not longer a
 * monorepo.
 */

throw new Error("This project is not longer a monorepo and this script is no longer needed.");

import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import semver from "semver";

const { inc, RELEASE_TYPES, valid } = semver;
const [, , ...args] = process.argv;
const [semverOrVersion] = args;

if (!semverOrVersion) {
	console.error("Missing semver or version");
	process.exit(1);
}

const packagesPath = join(process.cwd(), "packages");
const packages = readdirSync(packagesPath, {
	withFileTypes: true,
});

for (const _package of packages) {
	const { name, parentPath } = _package;
	const packageJsonPath = join(parentPath, name, "package.json");
	const existsPackageJson = existsSync(packageJsonPath);

	if (!existsPackageJson) {
		continue;
	}

	const packageJsonContent = readFileSync(packageJsonPath, "utf-8");
	const parsedJsonContent = JSON.parse(packageJsonContent);
	const packageName = parsedJsonContent.name;
	const currentVersion = parsedJsonContent.version;
	let version = currentVersion;

	// @ts-ignore
	if (RELEASE_TYPES.includes(semverOrVersion.toLowerCase())) {
		// @ts-ignore
		version = inc(currentVersion, semverOrVersion.toLowerCase());
	} else {
		const isValidVersion = valid(semverOrVersion);

		if (!isValidVersion) {
			console.error(`Invalid version: "${semverOrVersion}".`);
			process.exit(1);
		}

		version = semverOrVersion;
	}

	parsedJsonContent.version = version;

	const stringifiedJsonContent = JSON.stringify(parsedJsonContent, null, 2);

	writeFileSync(packageJsonPath, `${stringifiedJsonContent}\n`, "utf-8");
	execSync(`biome check --write ${packageJsonPath}`);

	console.log(
		`✅ Updated package "${packageName}" version from "${currentVersion}" to "${version}".`,
	);
}
