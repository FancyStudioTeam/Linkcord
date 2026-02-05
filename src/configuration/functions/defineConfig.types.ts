import type { core } from 'zod';
import type { ConfigurationSchema } from '#configuration/schemas/ConfigurationSchema.js';
import type { GatewayIntents } from '#types/index.js';

/**
 * Defines the options for the `commandsCache` configuration.
 */
export interface DefineConfigCommandsCacheOptions {
	/**
	 * Enables or disables command data caching.
	 *
	 * When enabled, commands data is stored in the specified
	 * {@link file | `file`} path as an array of application command objects.
	 *
	 * When disabled, no command data will be read from or written to the cache
	 * file.
	 *
	 * @default false
	 */
	enabled?: boolean;
	/**
	 * The relative path (from `process.cwd()`) to the file where the commands
	 * data is stored for caching purposes.
	 *
	 * @default 'commands.json'
	 */
	filePath?: string;
}

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
 * Defines the options for the framework configuration.
 */
export interface DefineConfigOptions {
	/**
	 * The configuration for command data caching.
	 *
	 * This option can be used to avoid re-uploading all commands on every
	 * application startup.
	 *
	 * @remarks
	 * Commands data caching is enabled by default.
	 */
	commandsCache?: DefineConfigCommandsCacheOptions;
	/**
	 * The intents of the application used to connect the shards to the Discord
	 * gateway.
	 */
	intents: GatewayIntents[];
	/**
	 * The configuration for the locations of the framework.
	 */
	locations?: DefineConfigLocationsOptions;
	/**
	 * The token of the application used to authenticate the client with the
	 * Discord API.
	 */
	token: `Bot ${string}`;
}

export type LinkcordOptions = core.output<typeof ConfigurationSchema>;
