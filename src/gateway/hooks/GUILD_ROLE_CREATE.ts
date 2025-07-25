import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Role } from "#structures/index.js";
import type { GatewayDispatchGuildRoleCreatePayload } from "#types/index.js";

export const GUILD_ROLE_CREATE = (
	client: Client,
	_shard: GatewayShard,
	{ guild_id: guildId, role: roleData }: GatewayDispatchGuildRoleCreatePayload,
) => {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;

	const cachedGuild = guildsCache.get(guildId);

	if (!cachedGuild) {
		return;
	}

	const { roles } = cachedGuild;
	const { id: roleId } = roleData;

	const role = new Role(client, roleData, cachedGuild);

	/**
	 * biome-ignore lint/complexity/useLiteralKeys: Accessing private members
	 * from the manager.
	 */
	roles["add"](roleId, role);

	events.emit("guildRoleCreate", role, cachedGuild);
};
