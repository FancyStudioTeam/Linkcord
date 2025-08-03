import { existsSync } from "node:fs";
import { join } from "node:path";
import type { LinkcordOptions } from "#configuration/functions/defineConfig.js";
import { CONFIGURATION_FILE_NOT_FOUND } from "#errors/messages.js";
import type { GatewayIntents } from "#types/index.js";
import { ImportUtils } from "#utils/structures/ImportUtils.js";

const AVAILABLE_FILE_EXTENSIONS = ["js", "cjs", "mjs", "ts", "cts", "mts"] as const;
// @ts-expect-error
const LINKCORD_CONFIGURATION: LinkcordOptions = {};

let ConfigurationFileLoaded = false;

/**
 * Freezes the configuration object.
 * @returns The frozen configuration object.
 */
function freeze(): Readonly<LinkcordOptions> {
	return Object.freeze(LINKCORD_CONFIGURATION);
}

/**
 * Gets the intents from the configuration.
 * @returns The intents from the configuration.
 */
function getIntents(): number {
	return getOptions().intents;
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
	return getOptions().token;
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

		/**
		 * If the configuration file with the current extension does not
		 * exist, continue to the next extension.
		 */
		if (!existsConfigurationFile) continue;

		const importConfigurationFilePath = ImportUtils.resolvePath(configurationFilePath);
		const importConfigurationFileData = await ImportUtils.import<ConfigurationFileData>(
			importConfigurationFilePath,
			true,
		);

		const { default: defaultExport } = importConfigurationFileData;

		setOptions(defaultExport);
		setConfigurationFileLoaded();

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
 * Reduces the intents to a number.
 * @param intents - The intents to reduce.
 * @returns The reduced intents as number.
 */
function transformIntents(intents: GatewayIntents[]): number {
	return intents.reduce((accumulator, intent) => accumulator | intent, 0);
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
	transformIntents,
};

/**
 * The expected structure of the imported configuration file data.
 * @internal
 */
interface ConfigurationFileData {
	/**
	 * The validated options of the framework.
	 */
	default: LinkcordOptions;
}
