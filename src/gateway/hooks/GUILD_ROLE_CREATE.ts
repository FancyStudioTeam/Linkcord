import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { type Guild, Role } from "#structures/index.js";
import { Uncached } from "#structures/Uncached.js";
import type { GatewayDispatchGuildRoleCreatePayload } from "#types/index.js";
import type { MaybeUncached } from "#utils/types.js";

export const GUILD_ROLE_CREATE = (
	client: Client,
	_shard: GatewayShard,
	{ guild_id: guildId, role: roleData }: GatewayDispatchGuildRoleCreatePayload,
) => {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;

	const { id: roleId } = roleData;
	const role = new Role(roleId, roleData);

	/**
	 * These variables will be assigned later by their cached instance or an
	 * `Uncached` instance.
	 */
	let guild: MaybeUncached<Guild>;

	const cachedGuild = guildsCache.get(guildId);

	if (cachedGuild) {
		guild = cachedGuild;

		const { roles } = cachedGuild;

		/**
		 * biome-ignore lint/complexity/useLiteralKeys: Accessing private
		 * members from the manager.
		 */
		roles["add"](roleId, role);
	}

	/**
	 * Assign an `Uncached` instance value to variables that have not been
	 * assigned yet.
	 */
	guild ??= new Uncached(guildId);

	events.emit("guildRoleCreate", role, guild);
};
