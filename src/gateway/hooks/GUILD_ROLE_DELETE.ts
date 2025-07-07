import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import type { Guild, Role } from "#structures/index.js";
import { Uncached } from "#structures/Uncached.js";
import type { GatewayDispatchGuildRoleDeletePayload } from "#types/index.js";
import type { MaybeUncached } from "#utils/types.js";

export const GUILD_ROLE_DELETE = (
	client: Client,
	_shard: GatewayShard,
	{ guild_id: guildId, role_id: roleId }: GatewayDispatchGuildRoleDeletePayload,
) => {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;

	let guild: MaybeUncached<Guild>;
	let role: MaybeUncached<Role>;

	const cachedGuild = guildsCache.get(guildId);

	if (cachedGuild) {
		guild = cachedGuild;

		const { roles } = cachedGuild;
		const { cache: rolesCache } = roles;
		const cachedRole = rolesCache.get(roleId);

		if (cachedRole) {
			role = cachedRole;
		}
	}

	guild ??= new Uncached(guildId);
	role ??= new Uncached(roleId);

	events.emit("guildRoleDelete", role, guild);
};
