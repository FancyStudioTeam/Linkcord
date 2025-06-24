import type { GatewayManagerOptions } from "../gateway/index.js";
import type { RESTManagerOptions } from "../rest/structures/index.js";
import type { GatewayIntents } from "../types/raw/index.js";
import type { VoiceManagerOptions } from "../voice/structures/VoiceManager.js";

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
  gateway?: LinkcordGatewayOptions;
  intents: GatewayIntents[] | number;
  locations: LinkcordLocationsOptions;
  rest?: LinkcordRestOptions;
  token: string;
  voice?: LinkcordVoiceOptions;
}

/**
 * @public
 */
export type LinkcordGatewayOptions = Omit<GatewayManagerOptions, "intents" | "token">;

/**
 * @public
 */
export type LinkcordRestOptions = Omit<RESTManagerOptions, "token">;

/**
 * @public
 */
export type LinkcordVoiceOptions = Omit<VoiceManagerOptions, "gateway">;
