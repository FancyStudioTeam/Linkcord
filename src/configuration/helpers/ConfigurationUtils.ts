import { existsSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";
import type { core } from "zod";
import type { ConfigurationLocationsSchema, ConfigurationSchema } from "#configuration/schemas/ConfigurationSchema.js";
import { ImportUtils } from "#utils/helpers/ImportUtils.js";

const FILE_EXTENSIONS = ["js", "cjs", "mjs", "ts", "cts", "mts"] as const;
// @ts-expect-error
const LINKCORD_CONFIGURATION: LinkcordOptions = {};

/**
 * Utility class for working with the Linkcord configuration.
 * @group Configuration/Helpers
 */
export class ConfigurationUtils {
	/**
	 * Freezes the configuration object of Linkcord.
	 * @returns The frozen configuration object of Linkcord.
	 */
	static freeze(): Readonly<LinkcordOptions> {
		return Object.freeze(LINKCORD_CONFIGURATION);
	}

	/**
	 * Gets the defined intents from the configuration.
	 * @returns The defined intents from the configuration.
	 */
	static getIntents(): number {
		const { intents } = ConfigurationUtils.getOptions();

		return intents;
	}

	/**
	 * Gets the defined locations from the configuration.
	 * @returns The defined intents from the configuration.
	 */
	static getLocations(): LinkcordOptionsLocations {
		const { locations } = ConfigurationUtils.getOptions();

		return locations;
	}

	/**
	 * Gets the defined options from the configuration.
	 * @returns The defined options from the configuration.
	 */
	static getOptions(): LinkcordOptions {
		return LINKCORD_CONFIGURATION;
	}

	/**
	 * Gets the defined token from the configuration.
	 * @returns The defined token from the configuration.
	 */
	static getToken(): string {
		const { token } = ConfigurationUtils.getOptions();

		return token;
	}

	/**
	 * Loads the configuration file with its configuration.
	 * @param workingDirectory - The root directory where the configuration file is located.
	 */
	static async loadConfigurationFile(workingDirectory = cwd()): Promise<void> {
		for (const extension of FILE_EXTENSIONS) {
			const configurationFilePath = join(workingDirectory, `linkcord.config.${extension}`);
			const existsConfigurationFile = existsSync(configurationFilePath);

			if (!existsConfigurationFile) continue;

			const importConfigurationFilePath = ImportUtils.resolvePath(configurationFilePath);
			const importConfigurationFileData = await ImportUtils.import<ConfigurationFileData>(
				importConfigurationFilePath,
				true,
			);

			const { default: defaultExport } = importConfigurationFileData;

			return void ConfigurationUtils.setOptions(defaultExport);
		}

		throw new Error("Configuration file 'linkcord.config' was not found.");
	}

	/**
	 * Assigns the options to the configuration object.
	 * @param options - The options to assign to the configuration object.
	 */
	static setOptions(options: LinkcordOptions): void {
		Object.assign(LINKCORD_CONFIGURATION, options);
	}
}

/**
 * Represents the structure of the configuration file import.
 * @group Configuration/Helpers
 */
interface ConfigurationFileData {
	/** The validated options of Linkcord. */
	default: LinkcordOptions;
}

/**
 * Represents the options used in Linkcord.
 * @group Configuration/Types
 */
export type LinkcordOptions = core.output<typeof ConfigurationSchema>;

/**
 * Represents the options used in the `locations` property in Linkcord.
 * @group Configuration/Types
 */
export type LinkcordOptionsLocations = core.output<typeof ConfigurationLocationsSchema>;
