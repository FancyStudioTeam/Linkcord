import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Role } from "#structures/index.js";
import { Uncached } from "#structures/Uncached.js";
import type { GatewayDispatchGuildRoleUpdatePayload } from "#types/index.js";
import type { MaybeUncached } from "#utils/types.js";

export const GUILD_ROLE_UPDATE = (
	client: Client,
	_shard: GatewayShard,
	{ guild_id: guildId, role: roleData }: GatewayDispatchGuildRoleUpdatePayload,
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
	 * biome-ignore lint/complexity/useLiteralKeys: Accessing private
	 * members from the manager.
	 */
	roles["patch"](roleId, roleData);

	/**
	 * These variables will be assigned later by their cached instance or an
	 * `Uncached` instance.
	 */
	let oldRole: MaybeUncached<Role>;

	const { cache: rolesCache } = roles;
	const cachedRole = rolesCache.get(roleId);

	if (!cachedRole) {
		return;
	}

	oldRole = structuredClone(cachedRole);

	/**
	 * biome-ignore lint/complexity/useLiteralKeys: Accessing private
	 * members from the manager.
	 */
	roles["patch"](roleId, roleData);

	/**
	 * Assign an `Uncached` instance value to variables that have not been
	 * assigned yet.
	 */
	oldRole ??= new Uncached(roleId);

	events.emit("guildRoleUpdate", role, oldRole, cachedGuild);
};
