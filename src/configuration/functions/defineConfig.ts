import { parse } from "valibot";
import {
	ConfigurationSchema,
	type LinkcordConfiguration,
} from "#configuration/schemas/ConfigurationSchema.js";
import { INVALID_CONFIGURATION_INPUT } from "#errors/messages.js";
import type { GatewayIntents } from "#types/index.js";

/**
 * Defines the configuration to be used in the framework.
 *
 * @public
 */
export function defineConfig(options: DefineConfigOptions): LinkcordConfiguration {
	try {
		return parse(ConfigurationSchema, options);
	} catch {
		throw new TypeError(INVALID_CONFIGURATION_INPUT());
	}
}

/**
 * Represents the `locations` option for the framework.
 *
 * @public
 */
export interface DefineConfigLocationsOptions {
	/**
	 * The name of the directory that contains the command handlers.
	 *
	 * @default commands
	 */
	commands?: string;
	/**
	 * The name of the directory that contains the event handlers.
	 *
	 * @default events
	 */
	events?: string;
	/**
	 * The name of the directory that contains the source code.
	 *
	 * @default src
	 */
	root?: string;
}

/**
 * Represents the options to use for the framework.
 *
 * @public
 */
export interface DefineConfigOptions {
	/**
	 * The intents to use when connecting the shards to the Discord gateway.
	 */
	intents: GatewayIntents[];
	/**
	 * The locations of the modules.
	 */
	locations?: DefineConfigLocationsOptions;
	/**
	 * The token to use for all Discord API interactions.
	 */
	token: string;
}
