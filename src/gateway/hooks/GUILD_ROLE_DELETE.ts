import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import type { GatewayDispatchGuildRoleDeletePayload } from "#types/index.js";

export const GUILD_ROLE_DELETE = (
  client: Client,
  _shard: GatewayShard,
  { guild_id: guildId, role_id: roleId }: GatewayDispatchGuildRoleDeletePayload,
) => {
  const { events } = client;

  events.emit("guildRoleDelete", roleId, guildId);
};
