import type { GatewayIntents } from "#types/index.js";

/**
 * Represents the options of the `locations` property of the Linkcord framework.
 * @group Configuration/Functions
 */
export interface DefineConfigLocationsOptions {
	/** The name of the directory that contains the command files. Defaults to `commands`. */
	commands?: string;
	/** The name of the directory that contains the event files. Defaults to `events`. */
	events?: string;
	/** The name of the root directory. Defaults to `src` when `NODE_ENV` is `development` and `dist` when `NODE_ENV` is `production`. */
	root?: string;
}

/**
 * Represents the options of the Linkcord framework.
 * @group Configuration/Functions
 */
export interface DefineConfigOptions {
	/** The intents of the client. */
	intents: GatewayIntents[];
	/** The locations of the modules. */
	locations?: DefineConfigLocationsOptions;
	/** The token of the bot. */
	token?: string;
}
