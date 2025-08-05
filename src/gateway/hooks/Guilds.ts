/*
 * biome-ignore-all lint/style/useNamingConvention: Function names must be the
 * exact name as the corresponding dispatch event.
 */
/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket
 * notation when accessing private or protected members from some structures.
 */

import type { Client } from "#client/index.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Guild, Role, Uncached } from "#structures/index.js";
import type {
	GatewayDispatchGuildCreatePayload,
	GatewayDispatchGuildDeletePayload,
	GatewayDispatchGuildRoleCreatePayload,
	GatewayDispatchGuildRoleDeletePayload,
	GatewayDispatchGuildRoleUpdatePayload,
	GatewayDispatchGuildUpdatePayload,
} from "#types/index.js";

/**
 * Handles the `GUILD_CREATE` event received from a gateway shard.
 * @param client - The main client instance to manage the event.
 * @param _shard - The gateway shard that received the event.
 * @param guildData - The received data from the `GUILD_CREATE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#guild-create
 * @internal
 */
export function GUILD_CREATE(
	client: Client,
	_shard: GatewayShard,
	guildData: GatewayDispatchGuildCreatePayload,
): void {
	const { events, guilds } = client;
	const { id: guildId, unavailable } = guildData;

	if (unavailable) return;

	const guild = new Guild(client, guildData);

	guilds["__add__"](guildId, guild);
	events.emit("guildCreate", guild);
}

/**
 * Handles the `GUILD_DELETE` event received from a gateway shard.
 * @param client - The main client instance to manage the event.
 * @param _shard - The gateway shard that received the event.
 * @param guildData - The received data from the `GUILD_DELETE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#guild-delete
 * @internal
 */
export function GUILD_DELETE(
	client: Client,
	_shard: GatewayShard,
	guildData: GatewayDispatchGuildDeletePayload,
): void {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;
	const { id: guildId, unavailable } = guildData;

	if (unavailable) return;

	const guild = guildsCache.get(guildId) ?? new Uncached(guildId);

	guilds["__remove__"](guildId);
	events.emit("guildDelete", guild);
}

/**
 * Handles the `GUILD_ROLE_CREATE` event received from a gateway shard.
 * @param client - The main client instance to manage the event.
 * @param _shard - The gateway shard that received the event.
 * @param _roleData The received data from the `GUILD_ROLE_CREATE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#guild-role-create
 * @internal
 */
export function GUILD_ROLE_CREATE(
	client: Client,
	_shard: GatewayShard,
	_roleData: GatewayDispatchGuildRoleCreatePayload,
): void {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;
	const { guild_id: guildId, role: roleData } = _roleData;

	const guild = guildsCache.get(guildId);

	if (!guild) return;

	const role = new Role(client, roleData, guildId);

	const { roles } = guild;
	const { id: roleId } = role;

	roles["__add__"](roleId, role);
	events.emit("guildRoleCreate", role, guild);
}

/**
 * Handles the `GUILD_ROLE_DELETE` event received from a gateway shard.
 * @param client - The main client instance to manage the event.
 * @param _shard - The gateway shard that received the event.
 * @param _roleData - The received data from the `GUILD_ROLE_DELETE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#guild-role-delete
 * @internal
 */
export function GUILD_ROLE_DELETE(
	client: Client,
	_shard: GatewayShard,
	_roleData: GatewayDispatchGuildRoleDeletePayload,
): void {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;
	const { guild_id: guildId, role_id: roleId } = _roleData;

	const guild = guildsCache.get(guildId);

	if (!guild) return;

	const { roles } = guild;
	const { cache: rolesCache } = roles;

	const role = rolesCache.get(roleId) ?? new Uncached(roleId);

	roles["__remove__"](roleId);
	events.emit("guildRoleDelete", role, guild);
}

/**
 * Handles the `GUILD_ROLE_UPDATE` event received from a gateway shard.
 * @param client - The main client instance to manage the event.
 * @param _shard - The gateway shard that received the event.
 * @param _roleData - The received data from the `GUILD_ROLE_UPDATE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#guild-role-update
 * @internal
 */
export function GUILD_ROLE_UPDATE(
	client: Client,
	_shard: GatewayShard,
	_roleData: GatewayDispatchGuildRoleUpdatePayload,
): void {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;
	const { guild_id: guildId, role: roleData } = _roleData;

	const guild = guildsCache.get(guildId);

	if (!guild) return;

	const { roles } = guild;
	const { cache: rolesCache } = roles;

	const newRole = new Role(client, roleData, guildId);
	const { id: roleId } = newRole;

	const cachedRole = rolesCache.get(roleId);
	const oldRole = cachedRole?.["_clone"]() ?? new Uncached(newRole.id);

	roles["__patch__"](roleId, roleData);
	events.emit("guildRoleUpdate", newRole, oldRole, guild);
}

/**
 * Handles the `GUILD_UPDATE` event received from a gateway shard.
 * @param client - The main client instance to manage the event.
 * @param _shard - The gateway shard that received the event.
 * @param guildData - The received data from the `GUILD_UPDATE` event.
 * @see https://discord.com/developers/docs/events/gateway-events#guild-update
 * @internal
 */
export function GUILD_UPDATE(
	client: Client,
	_shard: GatewayShard,
	guildData: GatewayDispatchGuildUpdatePayload,
): void {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;
	const { id: guildId } = guildData;

	const cachedGuild = guildsCache.get(guildId);
	const newGuild = new Guild(client, guildData);
	// Clone the cached guild to prevent mutating the original instance.
	// If the guild is not cached, create a new `Uncached` instance.
	const oldGuild = cachedGuild?.["_clone"]() ?? new Uncached(guildId);

	guilds["__patch__"](guildId, guildData);
	events.emit("guildUpdate", newGuild, oldGuild);
}
