import { match } from "ts-pattern";
import type { Client } from "#client";
import { type GatewayDispatchEvent, GatewayDispatchEventName } from "#types/gateway/events.js";
import type { Shard } from "../../Shard.js";
import { handleGuildCreate } from "../handlers/guilds/GUILD_CREATE.js";
import { handleMessageCreate } from "../handlers/messages/MESSAGE_CREATE.js";

export class DispatcherManager {
  protected _client: Client;
  protected _shard: Shard;

  constructor(shard: Shard, client: Client) {
    this._client = client;
    this._shard = shard;
  }

  /**
   * Handles a dispatch event.
   *
   * @param dispatchEvent - The dispatch event to handle.
   */
  async handleDispatchEvent(dispatchEvent: GatewayDispatchEvent): Promise<void> {
    const { _client } = this;

    match(dispatchEvent)
      .with(
        {
          t: GatewayDispatchEventName.GuildCreate,
        },
        (guildCreateEvent) => handleGuildCreate(_client, guildCreateEvent),
      )
      .with(
        {
          t: GatewayDispatchEventName.MessageCreate,
        },
        (messageCreateEvent) => handleMessageCreate(_client, messageCreateEvent),
      )
      .otherwise((unhandledDispatchEvent) => {
        const { t } = unhandledDispatchEvent;

        _client.emit("debug", `Received unhandled dispatch event: "${t}".`);
      });
  }
}
