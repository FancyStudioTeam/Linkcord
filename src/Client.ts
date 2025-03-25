import { EventEmitter } from "ws";
import { GatewayManager } from "#gateway";
import { RESTManager } from "#rest";
import type { ClientEvents, CreateClientOptions, CreateMessageOptions, GatewayBot, Message, Snowflake } from "#types";

export class Client extends EventEmitter<ClientEvents> {
  protected _token: string;
  /** The client gateway manager. */
  gateway: GatewayManager;
  /** The options used to create the client instance. */
  options: CreateClientOptions;
  /** The client REST manager. */
  rest: RESTManager;

  constructor(options: CreateClientOptions) {
    super();

    const { gateway, token } = options;
    const { intents, shards } = gateway;

    this._token = token;
    this.gateway = new GatewayManager(this, {
      intents,
      shards,
      token,
    });
    this.options = options;
    this.rest = new RESTManager(this, {
      token,
    });
  }

  /** Connects the client to the Discord gateway. */
  async connect(): Promise<void> {
    const { gateway } = this;

    await gateway.spawnShards();
  }

  /**
   * Creates a message in a channel.
   *
   * @param channelId - The channel ID to create the message in.
   * @param options - The options to use when creating the message.
   *
   * @returns The created message object.
   */
  async createMessage(channelId: Snowflake, options: CreateMessageOptions): Promise<Message> {
    const { rest } = this;
    const { channels } = rest;
    const message = await channels.createMessage(channelId, options);

    return message;
  }

  /**
   * Gets the gateway bot object.
   *
   * @returns The gateway bot object.
   */
  async getGatewayBot(): Promise<GatewayBot> {
    const { rest } = this;
    const { miscellaneous } = rest;
    const gatewayBot = await miscellaneous.getGatewayBot();

    return gatewayBot;
  }
}
