import type { GatewayIntents } from '#types/index.js';

/**
 * Defines the options for the `locations` configuration.
 */
export interface DefineConfigLocationsOptions {
	/**
	 * The relative path (from {@link root | `root`}) to the folder where the
	 * commands are located.
	 *
	 * @default 'commands'
	 */
	commands?: string;
	/**
	 * The relative path (from {@link root | `root`}) to the folder where the
	 * events are located.
	 *
	 * @default 'events'
	 */
	events?: string;
	/**
	 * The root directory used to resolve the framework files.
	 *
	 * Linkcord resolves this path relative to `process.cwd()`.
	 *
	 * @remarks
	 * Depending on the `NODE_ENV` environment variable, Linkcord will use `dist`
	 * in production and `src` in development.
	 *
	 * @default 'dist' (production), 'src' (development)
	 */
	root?: string;
}

/**
 * Defines the options for the `commandsCache` configuration.
 */
export interface DefineConfigCommandsCacheOptions {
	/**
	 * Whether to enable the cache of commands.
	 */
	enabled: boolean;
	/**
	 * The name of the file where the commands will be stored.
	 */
	file: string;
}

export interface DefineConfigOptions {
	/**
	 * The intents of the application used to connect the shards to the Discord
	 * gateway.
	 */
	intents: GatewayIntents[];
	locations?: DefineConfigLocationsOptions;
	/**
	 * The token of the application used to authenticate the client with the
	 * Discord API.
	 */
	token: `Bot ${string}`;
}

export interface LinkcordOptions {
	intents: number;
	locations: LinkcordLocationOptions;
	token: string;
}

export type LinkcordLocationOptions = Required<DefineConfigLocationsOptions>;
