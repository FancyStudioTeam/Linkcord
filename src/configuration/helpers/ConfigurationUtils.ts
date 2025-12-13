import { existsSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";
import type { LinkcordOptions } from "#configuration/functions/defineConfig.types.js";
import { importFile, resolvePath } from "#utils/helpers/ImportUtils.js";

const CONFIGURATION_FILE_EXTENSIONS = [
	"js",
	"cjs",
	"mjs",
	"ts",
	"cts",
	"mts",
] as const;
// @ts-expect-error
const CONFIGURATION_OPTIONS: LinkcordOptions = {};

export function freeze(): Readonly<LinkcordOptions> {
	return Object.freeze(CONFIGURATION_OPTIONS);
}

export function getOptions(): LinkcordOptions {
	return CONFIGURATION_OPTIONS;
}

export async function loadConfigurationFile(workingDirectory = cwd()): Promise<void> {
	for (const extension of CONFIGURATION_FILE_EXTENSIONS) {
		const configurationFilePath = join(workingDirectory, `linkcord.config.${extension}`);
		const existsConfigurationFile = existsSync(configurationFilePath);

		if (!existsConfigurationFile) continue;

		const resolvedConfigurationFilePath = resolvePath(configurationFilePath);
		const importedConfigurationFileData = await importFile<ImportedConfigurationFileData>(
			resolvedConfigurationFilePath,
			{
				requireDefault: true,
			},
		);

		const { default: linkcordOptions } = importedConfigurationFileData;

		setOptions(linkcordOptions);
		freeze();

		return;
	}

	throw new Error("Configuration file 'linkcord.config' not found");
}

export function setOptions(options: LinkcordOptions): void {
	Object.assign(CONFIGURATION_OPTIONS, options);
}

interface ImportedConfigurationFileData {
	default: LinkcordOptions;
}
