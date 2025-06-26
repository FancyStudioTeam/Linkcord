import type { Client } from "#client/Client.js";
import type { Uncached } from "#client/ClientEvents.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Role } from "#structures/index.js";
import type { GatewayDispatchGuildRoleUpdatePayload } from "#types/index.js";

export const GUILD_ROLE_UPDATE = (
  client: Client,
  _shard: GatewayShard,
  { guild_id: guildId, role: roleData }: GatewayDispatchGuildRoleUpdatePayload,
) => {
  const { events } = client;
  const { id: roleId } = roleData;
  const role = new Role(roleId, roleData);
  const uncachedRole: Uncached = {
    id: roleId,
    uncached: true,
  };

  events.emit("guildRoleUpdate", role, uncachedRole, guildId);
};
