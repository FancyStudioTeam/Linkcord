import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { User } from "#structures/index.js";
import type { GatewayDispatchReadyPayload } from "#types/index.js";

export const READY = (client: Client, shard: GatewayShard, { guilds, user }: GatewayDispatchReadyPayload) => {
  const { manager } = shard;
  const { events, unavailableGuilds } = client;
  const { id: userId } = user;
  const clientUser = new User(userId, user);

  for (const { id: guildId, unavailable } of guilds) {
    unavailableGuilds.set(guildId, unavailable);
  }

  events.emit("shardReady", clientUser, shard);
  /**
   * biome-ignore lint/complexity/useLiteralKeys: Accessing private members
   * from the manager.
   */
  manager["checkReady"]();
};
