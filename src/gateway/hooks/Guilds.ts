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
import { Guild, Uncached } from "#structures/index.js";
import type {
	GatewayDispatchGuildCreatePayload,
	GatewayDispatchGuildDeletePayload,
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

	guilds["_add"](guildId, guild);
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

	guilds["_remove"](guildId);
	events.emit("guildDelete", guild);
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

	guilds["_patch"](guildId, guildData);
	events.emit("guildUpdate", newGuild, oldGuild);
}
