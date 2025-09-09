import { existsSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";
import type { LinkcordOptions, LinkcordOptionsLocations } from "#configuration/types/index.js";
import type { GatewayIntents } from "#types/index.js";
import { ImportUtils } from "#utils/helpers/ImportUtils.js";

const AVAILABLE_FILE_EXTENSIONS = ["js", "cjs", "mjs", "ts", "cts", "mts"] as const;
const BOT_PREFIX_REGEX = /^Bot\s*/i;
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
 * Reduces the intents to a number.
 * @param intents - The intents to reduce.
 * @returns The reduced intents as number.
 */
function transformIntents(intents: GatewayIntents[]): number {
	if (!Array.isArray(intents)) {
		return 0;
	}

	const reducedIntents = intents.reduce((accumulator, intent) => accumulator | intent, 0);

	return reducedIntents;
}

/**
 * Removes the `Bot` prefix from the bot token, if exists.
 * @param token - The token to transform.
 * @returns The token without the `Bot` prefix.
 */
function transformToken(token: string): string {
	if (typeof token !== "string") {
		return "";
	}

	const trimmedToken = token.trim();
	const replacedToken = trimmedToken.replace(BOT_PREFIX_REGEX, "");

	return replacedToken;
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
	transformIntents,
	transformToken,
});

/** The expected structure of the imported file. */
interface ConfigurationFileData {
	/** The validated options of the framework. */
	default: LinkcordOptions;
}
