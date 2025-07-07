import type { GatewayIntents } from "../types/discord/index.js";

/**
 * @public
 */
export const defineConfig = (options: LinkcordOptions): LinkcordOptions => options;

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
export interface LinkcordLocationsBase {
	development: string;
	production: string;
}

/**
 * @public
 */
export interface LinkcordLocationsOptions {
	commands?: string;
	events?: string;
	root: string;
}

/**
 * @public
 */
export interface LinkcordOptions {
	/**
	 * @experimental
	 */
	commandsCache?: LinkcordCommandsCacheOptions;
	/**
	 * @experimental
	 */
	compress?: boolean;
	intents: GatewayIntents[] | GatewayIntentsString[] | number;
	locations: LinkcordLocationsOptions;
	token: string;
}

/**
 * @public
 */
export type GatewayIntentsString = keyof typeof GatewayIntents;
