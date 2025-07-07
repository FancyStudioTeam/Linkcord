import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Role } from "#structures/index.js";
import { Uncached } from "#structures/Uncached.js";
import type { GatewayDispatchGuildRoleUpdatePayload } from "#types/index.js";

export const GUILD_ROLE_UPDATE = (
	client: Client,
	_shard: GatewayShard,
	{ guild_id: guildId, role: roleData }: GatewayDispatchGuildRoleUpdatePayload,
) => {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;

	const guild = guildsCache.get(guildId) ?? new Uncached(guildId);

	const { id: roleId } = roleData;
	const newRole = new Role(roleId, roleData);
	/**
	 * TODO: Get cached role from guild.
	 */
	const oldRole = new Uncached(roleId);

	events.emit("guildRoleUpdate", newRole, oldRole, guild);
};
