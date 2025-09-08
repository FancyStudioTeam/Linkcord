import type { InferOutput } from "valibot";
import type { ConfigurationLocationsSchema, ConfigurationSchema } from "#configuration/schemas/ConfigurationSchema.js";
import type { GatewayIntents } from "#types/index.js";

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
	/** The intents to use when connecting the shards to the Discord gateway. */
	intents: GatewayIntents[];
	/** The locations of the modules. */
	locations: DefineConfigLocationsOptions;
	/** The token to use for all Discord API interactions. */
	token: string;
}

/**
 * The validated options of the framework.
 * @public
 */
export type LinkcordOptions = InferOutput<typeof ConfigurationSchema>;

/**
 * The `locations` options validated by the framework.
 * @public
 */
export type LinkcordOptionsLocations = InferOutput<typeof ConfigurationLocationsSchema>;
