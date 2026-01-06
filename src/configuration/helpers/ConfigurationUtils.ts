import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';
import type { LinkcordOptions } from '#configuration/functions/defineConfig.types.js';
import { ConfigurationSchema } from '#configuration/schemas/ConfigurationSchema.js';
import { CONFIGURATION_FILE_NOT_FOUND } from '#errors/messages.js';
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

export const ConfigurationUtils = {
	freezeConfigurationOptions(): Readonly<LinkcordOptions> {
		return Object.freeze(CONFIGURATION_OPTIONS);
	},

	getCommandsCache(): LinkcordOptions['commandsCache'] {
		return this.getConfigurationOption('commandsCache');
	},

	getConfigurationOption<Option extends keyof LinkcordOptions>(option: Option): LinkcordOptions[Option] {
		return CONFIGURATION_OPTIONS[option];
	},

	getIntents(): number {
		return this.getConfigurationOption('intents');
	},

	getLocations(): LinkcordOptions['locations'] {
		return this.getConfigurationOption('locations');
	},

	getToken(): string {
		return this.getConfigurationOption('token');
	},

	async initializeConfigurationOptions(workingDirectory = cwd()): Promise<void> {
		for (const extension of CONFIGURATION_FILE_EXTENSIONS) {
			const configurationFilePath = join(workingDirectory, `linkcord.config.${extension}`);

			/*
			 * If the file with the current extension does not exist, continue to the
			 * next extension.
			 */
			if (!existsSync(configurationFilePath)) {
				continue;
			}

			const resolvedConfigurationFilePath = resolvePath(configurationFilePath);
			const importedConfigurationFileData = await importFile<ImportedConfigurationFileData>(resolvedConfigurationFilePath, {
				requireDefault: true,
			});

			const { default: _default } = importedConfigurationFileData;
			const linkcordOptions = validate(ConfigurationSchema, _default);

			this.setConfigurationOptions(linkcordOptions);
			this.freezeConfigurationOptions();

			break;
		}

		if (!this.isConfigurationInitialized()) {
			throw new Error(CONFIGURATION_FILE_NOT_FOUND());
		}

		return;
	},

	isConfigurationInitialized() {
		const isTokenOptionAvailable = Reflect.has(CONFIGURATION_OPTIONS, 'token');
		const isIntentsOptionAvailable = Reflect.has(CONFIGURATION_OPTIONS, 'intents');

		return isTokenOptionAvailable && isIntentsOptionAvailable;
	},

	setConfigurationOptions(options: LinkcordOptions): void {
		Object.assign(CONFIGURATION_OPTIONS, options);
	},
};

interface ImportedConfigurationFileData {
	default: LinkcordOptions;
}
