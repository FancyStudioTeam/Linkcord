import type { GatewayIntents } from "../types/raw/index.js";

/**
 * @public
 */
export const defineConfig = (options: LinkcordOptions): LinkcordOptions => options;

/**
 * @public
 */
export interface LinkcordCommandsCacheOptions {
  cachePath?: string;
  enabled: boolean;
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
  base: string;
  commands?: string;
  events?: string;
}

/**
 * @public
 */
export interface LinkcordOptions {
  commandsCache?: LinkcordCommandsCacheOptions;
  intents: GatewayIntents[] | GatewayIntentsString[] | number;
  locations: LinkcordLocationsOptions;
  token: string;
}

/**
 * @public
 */
export type GatewayIntentsString = keyof typeof GatewayIntents;
