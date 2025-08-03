import { existsSync } from "node:fs";
import { join } from "node:path";
import type { LinkcordOptions } from "#configuration/schemas/ConfigurationSchema.js";
import { CONFIGURATION_FILE_NOT_FOUND, INVALID_CONFIGURATION_OBJECT } from "#errors/messages.js";
import { ImportUtils } from "#utils/structures/ImportUtils.js";

const AVAILABLE_FILE_EXTENSIONS = ["js", "cjs", "mjs", "ts", "cts", "mts"] as const;
// @ts-expect-error
const LINKCORD_CONFIGURATION: LinkcordOptions = {};
const LINKCORD_CONFIGURATION_IS_EMPTY = Object.keys(LINKCORD_CONFIGURATION).length === 0;

let ConfigurationFileLoaded = false;

/**
 * Freezes the configuration object.
 * @returns The frozen configuration object.
 */
function freeze(): Readonly<LinkcordOptions> {
	if (LINKCORD_CONFIGURATION_IS_EMPTY) {
		throw new TypeError(INVALID_CONFIGURATION_OBJECT());
	}

	return Object.freeze(LINKCORD_CONFIGURATION);
}

/**
 * Gets the intents from the configuration.
 * @returns The intents from the configuration.
 */
function getIntents(): number {
	const { intents } = getOptions();

	return intents;
}

/**
 * Gets the options from the configuration.
 * @returns The options from the configuration.
 */
function getOptions(): Readonly<LinkcordOptions> {
	return LINKCORD_CONFIGURATION;
}

/**
 * Gets the	token from the configuration.
 * @returns The token from the configuration.
 */
function getToken(): string {
	const { token } = getOptions();

	return token;
}

/**
 * Loads the configuration file and assigns the options to the configuration.
 * @param workingDirectory - The directory root where the configuration file
 * is located.
 */
async function loadConfigurationFile(workingDirectory = process.cwd()): Promise<void> {
	for (const extension of AVAILABLE_FILE_EXTENSIONS) {
		const configurationFilePath = join(workingDirectory, `linkcord.config.${extension}`);
		const existsConfigurationFile = existsSync(configurationFilePath);

		if (!existsConfigurationFile) continue;

		const importConfigurationFilePath = ImportUtils.resolvePath(configurationFilePath);
		const importConfigurationFileData = await ImportUtils.import<ConfigurationFileData>(
			importConfigurationFilePath,
			true,
		);

		const { default: defaultExport } = importConfigurationFileData;

		setConfigurationFileLoaded();
		setOptions(defaultExport);

		break;
	}

	if (!ConfigurationFileLoaded) {
		throw new Error(CONFIGURATION_FILE_NOT_FOUND());
	}
}

/**
 * Marks the configuration file as loaded.
 */
function setConfigurationFileLoaded(): void {
	ConfigurationFileLoaded = true;
}

/**
 * Assigns the options to the configuration.
 * @param options - The options to assign to the configuration.
 */
function setOptions(options: LinkcordOptions): void {
	Object.assign(LINKCORD_CONFIGURATION, options);
}

/**
 * Namespace for configuration utilities.
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
 * The expected structure of the imported configuration file data.
 * @internal
 */
interface ConfigurationFileData {
	default: LinkcordOptions;
}
