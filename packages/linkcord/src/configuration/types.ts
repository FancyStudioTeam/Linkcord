import type { GatewayManagerOptions } from "@fancystudioteam/linkcord-gateway";
import type { RESTManagerOptions } from "@fancystudioteam/linkcord-rest";
import type { GatewayIntents } from "@fancystudioteam/linkcord-types";
import type { VoiceManagerOptions } from "@fancystudioteam/linkcord-voice";

export interface LinkcordOptions {
  gateway?: LinkcordGatewayOptions;
  intents: GatewayIntents[] | number;
  rest?: LinkcordRestOptions;
  token: string;
  voice?: LinkcordVoiceOptions;
}

export type LinkcordGatewayOptions = Omit<GatewayManagerOptions, "intents" | "token">;
export type LinkcordRestOptions = Omit<RESTManagerOptions, "token">;
export type LinkcordVoiceOptions = Omit<VoiceManagerOptions, "gateway">;
