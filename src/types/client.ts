import type { Message } from "./channels.js";
import type { CreateGatewayManagerOptions } from "./gateway.js";
import type { CreateRestManagerOptions } from "./rest.js";

export interface ClientEvents {
  debug: [message: string];
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
