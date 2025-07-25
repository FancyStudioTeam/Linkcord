import type { GatewayIntents } from "#types/index.js";

/**
 * @experimental
 */
export interface LinkcordCommandsCacheOptions {
	cachePath?: string;
	enabled: boolean;
	useRootDirectory?: boolean;
}

/**
 * @public
 */
export interface LinkcordLocationsOptions {
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
 * @public
 */
export interface LinkcordOptions {
	/**
	 * The intents to use when connecting the shards to the Discord gateway.
	 */
	intents: GatewayIntents[];
	/**
	 * The locations of the modules.
	 */
	locations?: LinkcordLocationsOptions;
	/**
	 * The token to use for all Discord API interactions.
	 */
	token: string;
}
