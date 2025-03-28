import type { Message } from "./channels/message.js";
import type { CreateGatewayManagerOptions } from "./gateway/manager.js";
import type { Guild } from "./guilds/guild.js";
import type { CreateRestManagerOptions } from "./rest/manager.js";

export interface ClientEvents {
  debug: [message: string];
  guildCreate: [guild: Guild];
  messageCreate: [message: Message];
}

export type CreateClientGatewayOptions = Omit<CreateGatewayManagerOptions, "token">;
export type CreateClientRestOptions = Omit<CreateRestManagerOptions, "token">;

export interface CreateClientOptions {
  /** The gateway options. */
  gateway: CreateClientGatewayOptions;
  /** The REST options. */
  rest?: CreateClientRestOptions;
  /** The client token to use. */
  token: string;
}
