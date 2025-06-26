import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { User } from "#structures/index.js";
import type { GatewayDispatchReadyPayload } from "#types/index.js";

export const READY = (
  client: Client,
  shard: GatewayShard,
  { guilds, user: userData }: GatewayDispatchReadyPayload,
) => {
  const { events, unavailableGuilds } = client;
  const { manager } = shard;
  const { id: userId } = userData;
  const user = new User(userId, userData);

  for (const { id: guildId, unavailable } of guilds) {
    unavailableGuilds.set(guildId, unavailable);
  }

  events.emit("shardReady", user, shard);
  /**
   * biome-ignore lint/complexity/useLiteralKeys: Accessing private members
   * from the manager.
   */
  manager["checkReady"]();
};
