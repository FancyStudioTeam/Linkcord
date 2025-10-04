import { existsSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";
import type { core } from "zod";
import type { ConfigurationLocationsSchema, ConfigurationSchema } from "#configuration/schemas/ConfigurationSchema.js";
import { ImportUtils } from "#utils/helpers/ImportUtils.js";

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
function getIntents(): Readonly<number> {
	return getOptions().intents;
}

/**
 * Gets the locations from the configuration.
 * @returns The locations from the configuration.
 */
function getLocations(): Readonly<LinkcordOptionsLocations> {
	return getOptions().locations;
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
function getToken(): Readonly<string> {
	return getOptions().token;
}

/**
 * Loads the configuration file and assigns the options to the configuration.
 * @param workingDirectory - The directory root where the configuration file
 * 	is located.
 */
async function loadConfigurationFile(workingDirectory = cwd()): Promise<void> {
	for (const extension of AVAILABLE_FILE_EXTENSIONS) {
		const configurationFilePath = join(workingDirectory, `linkcord.config.${extension}`);
		const existsConfigurationFile = existsSync(configurationFilePath);

		// If the configuration file path with the current extension does not
		// exist, continue to the next extension.
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
		throw new Error('Configuration file "linkcord.config" has not been found.');
	}
}

/** Marks the configuration file as loaded. */
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
 * Utilities for the configuration.
 * @internal
 */
export const ConfigurationUtils = Object.freeze({
	freeze,
	getIntents,
	getLocations,
	getOptions,
	getToken,
	loadConfigurationFile,
	setOptions,
});

/** The expected structure of the imported file. */
interface ConfigurationFileData {
	/** The validated options of the framework. */
	default: LinkcordOptions;
}

/**
 * Represents the options used in the Linkcord framework.
 * @group Configuration/Types
 */
export type LinkcordOptions = core.output<typeof ConfigurationSchema>;

/**
 * Represents the options used in the `locations` property in the Linkcord framework.
 * @group Configuration/Types
 */
export type LinkcordOptionsLocations = core.output<typeof ConfigurationLocationsSchema>;
