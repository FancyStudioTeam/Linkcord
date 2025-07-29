import { existsSync } from "node:fs";
import { join } from "node:path";
import type { LinkcordOptions } from "#configuration/schemas/ConfigurationSchema.js";
import { MISSING_DEFAULT_EXPORT_FROM_FILE_PATH } from "#errors/messages.js";
import { ImportUtils } from "#utils/structures/ImportUtils.js";

/**
 * An array of allowed file extensions for the configuration file.
 *
 * @internal
 */
const ALLOWED_FILE_EXTENSIONS = ["js", "cjs", "mjs", "ts", "cts", "mts"] as const;

/**
 * @internal
 */
// @ts-expect-error
const LINKCORD_CONFIGURATION: LinkcordOptions = {};

/**
 * Freezes the configuration object.
 */
function freeze(): Readonly<LinkcordOptions> {
	return Object.freeze(LINKCORD_CONFIGURATION);
}

/**
 * Gets the defined intents from the configuration.
 *
 * @returns The intents from the configuration.
 */
function getIntents(): number {
	const { intents } = getOptions();

	return intents;
}

/**
 * Gets the options from the configuration.
 *
 * @returns The options from the configuration.
 */
function getOptions(): Readonly<LinkcordOptions> {
	return LINKCORD_CONFIGURATION;
}

/**
 * Gets the defined token from the configuration.
 *
 * @returns The token from the configuration.
 */
function getToken(): string {
	const { token } = getOptions();

	return token;
}

/**
 * Loads the configuration file and assigns the options to the configuration.
 *
 * @param workingDirectory - The directory root to search for the
 * configuration file.
 *
 * @returns The frozen assigned options.
 */
async function loadConfigurationFile(
	workingDirectory = process.cwd(),
): Promise<Readonly<LinkcordOptions>> {
	for (const extension of ALLOWED_FILE_EXTENSIONS) {
		const configurationFilePath = join(workingDirectory, `linkcord.config.${extension}`);
		const existsConfigurationFile = existsSync(configurationFilePath);

		if (!existsConfigurationFile) {
			continue;
		}

		const importConfigurationFilePath = ImportUtils.resolvePath(configurationFilePath);
		const importConfigurationFileData = (await import(
			importConfigurationFilePath
		)) as ImportConfigurationFileData;

		const { default: defaultExport } = importConfigurationFileData;

		if (!defaultExport) {
			throw new Error(MISSING_DEFAULT_EXPORT_FROM_FILE_PATH(configurationFilePath));
		}

		setOptions(defaultExport);
		freeze();

		break;
	}

	/**
	 * TODO: Validate the configuration.
	 */

	return getOptions();
}

/**
 * Assigns the options to the configuration.
 *
 * @param options - The options to assign.
 *
 * @returns The assigned options.
 */
function setOptions(options: LinkcordOptions): LinkcordOptions {
	return Object.assign(LINKCORD_CONFIGURATION, options);
}

/**
 * Namespace for configuration utilities.
 *
 * @internal
 */
export const ConfigurationUtils = {
	freeze,
	getIntents,
	getOptions,
	getToken,
	loadConfigurationFile,
	setOptions,
};

/**
 * @internal
 */
interface ImportConfigurationFileData {
	default?: LinkcordOptions;
}
