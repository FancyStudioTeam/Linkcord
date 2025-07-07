import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Uncached } from "#structures/Uncached.js";
import type { GatewayDispatchGuildRoleDeletePayload } from "#types/index.js";

export const GUILD_ROLE_DELETE = (
	client: Client,
	_shard: GatewayShard,
	{ guild_id: guildId, role_id: roleId }: GatewayDispatchGuildRoleDeletePayload,
) => {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;

	const guild = guildsCache.get(guildId) ?? new Uncached(guildId);

	/**
	 * TODO: Get cached role from guild.
	 */
	events.emit("guildRoleDelete", new Uncached(roleId), guild);
};
