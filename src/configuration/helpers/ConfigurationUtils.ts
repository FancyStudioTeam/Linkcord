import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';
import type { LinkcordOptions } from '#configuration/functions/defineConfig.types.js';
import { ConfigurationSchema } from '#configuration/schemas/ConfigurationSchema.js';
import { validate } from '#utils/functions/validate.js';
import { importFile, resolvePath } from '#utils/helpers/ImportUtils.js';

const CONFIGURATION_FILE_EXTENSIONS = [
	'js',
	'cjs',
	'mjs',
	'ts',
	'cts',
	'mts',
] as const;
// @ts-expect-error
const CONFIGURATION_OPTIONS: LinkcordOptions = {};

export function freezeConfigurationOptions(): Readonly<LinkcordOptions> {
	return Object.freeze(CONFIGURATION_OPTIONS);
}

export function getConfigurationOptions(): LinkcordOptions {
	return CONFIGURATION_OPTIONS;
}

export async function initializeConfigurationOptions(workingDirectory = cwd()): Promise<void> {
	for (const extension of CONFIGURATION_FILE_EXTENSIONS) {
		const configurationFilePath = join(workingDirectory, `linkcord.config.${extension}`);
		const existsConfigurationFile = existsSync(configurationFilePath);

		if (!existsConfigurationFile) {
			continue;
		}

		const resolvedConfigurationFilePath = resolvePath(configurationFilePath);
		const importedConfigurationFileData = await importFile<ImportedConfigurationFileData>(resolvedConfigurationFilePath, {
			requireDefault: true,
		});

		const { default: defaultExport } = importedConfigurationFileData;
		const linkcordOptions = validate(ConfigurationSchema, defaultExport);

		setConfigurationOptions(linkcordOptions);
		freezeConfigurationOptions();

		return;
	}

	throw new Error("Configuration file 'linkcord.config' not found");
}

export function isConfigurationInitialized() {
	const isTokenOptionAvailable = Reflect.has(CONFIGURATION_OPTIONS, 'token');
	const isIntentsOptionAvailable = Reflect.has(CONFIGURATION_OPTIONS, 'intents');

	return isTokenOptionAvailable && isIntentsOptionAvailable;
}

export function setConfigurationOptions(options: LinkcordOptions): void {
	Object.assign(CONFIGURATION_OPTIONS, options);
}

interface ImportedConfigurationFileData {
	default: LinkcordOptions;
}
