import type { GatewayManagerOptions } from "@fancystudioteam/linkcord-gateway";
import type { RESTManagerOptions } from "@fancystudioteam/linkcord-rest";
import type { GatewayIntents } from "@fancystudioteam/linkcord-types";
import type { VoiceManagerOptions } from "@fancystudioteam/linkcord-voice";

export const defineConfig = (options: LinkcordOptions): LinkcordOptions => options;

export interface LinkcordLocationsBase {
  development: string;
  production: string;
}

export interface LinkcordLocationsOptions {
  base: string;
  commands?: string;
  events?: string;
}

export interface LinkcordOptions {
  gateway?: LinkcordGatewayOptions;
  intents: GatewayIntents[] | number;
  locations: LinkcordLocationsOptions;
  rest?: LinkcordRestOptions;
  token: string;
  voice?: LinkcordVoiceOptions;
}

export type LinkcordGatewayOptions = Omit<GatewayManagerOptions, "intents" | "token">;
export type LinkcordRestOptions = Omit<RESTManagerOptions, "token">;
export type LinkcordVoiceOptions = Omit<VoiceManagerOptions, "gateway">;
