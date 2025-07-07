import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Role } from "#structures/index.js";
import { Uncached } from "#structures/Uncached.js";
import type { GatewayDispatchGuildRoleCreatePayload } from "#types/index.js";

export const GUILD_ROLE_CREATE = (
	client: Client,
	_shard: GatewayShard,
	{ guild_id: guildId, role: roleData }: GatewayDispatchGuildRoleCreatePayload,
) => {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;

	const guild = guildsCache.get(guildId) ?? new Uncached(guildId);

	const { id: roleId } = roleData;
	const role = new Role(roleId, roleData);

	events.emit("guildRoleCreate", role, guild);
};
