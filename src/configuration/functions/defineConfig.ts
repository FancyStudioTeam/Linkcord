import { type InferOutput, parse } from "valibot";
import {
	type ConfigurationLocationsSchema,
	ConfigurationSchema,
} from "#configuration/schemas/ConfigurationSchema.js";
import { INVALID_DEFINE_CONFIG_INPUT } from "#errors/messages.js";
import type { GatewayIntents } from "#types/index.js";

/**
 * Defines the configuration of the framework.
 * @param options - The options to use in the framework.
 * @returns The validated options of the framework.
 * @public
 */
export function defineConfig(options: DefineConfigOptions): LinkcordOptions {
	try {
		return parse(ConfigurationSchema, options);
	} catch {
		throw new TypeError(INVALID_DEFINE_CONFIG_INPUT());
	}
}

/**
 * The `locations` options of the framework.
 * @public
 */
export interface DefineConfigLocationsOptions {
	/**
	 * The name of the directory that contains the command handlers.
	 * @default commands
	 */
	commands?: string;
	/**
	 * The name of the directory that contains the event handlers.
	 * @default events
	 */
	events?: string;
	/**
	 * The name of the directory of the source code.
	 * @default src
	 */
	root?: string;
}

/**
 * The options of the framework.
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
	locations: DefineConfigLocationsOptions;
	/**
	 * The token to use for all Discord API interactions.
	 */
	token: string;
}

/**
 * The options validated by the framework.
 * @public
 */
export type LinkcordOptions = InferOutput<typeof ConfigurationSchema>;

/**
 * The `locations` options validated by the framework.
 * @public
 */
export type LinkcordOptionsLocations = InferOutput<typeof ConfigurationLocationsSchema>;
