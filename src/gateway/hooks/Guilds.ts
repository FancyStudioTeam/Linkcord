/*
 * biome-ignore-all lint/style/useNamingConvention: Function names must exactly
 * match Discord dispatch event names.
 */
/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Accessing private or
 * protected members requires bracket notation in this context.
 */

import { type Client, ClientEvents } from '#client/index.js';
import type { GatewayShard } from '#gateway/structures/GatewayShard.js';
import { Guild } from '#structures/Guild.js';
import { Uncached } from '#structures/Uncached.js';
import type { GatewayDispatchGuildCreateEventPayload, GatewayDispatchGuildUpdateEventPayload } from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-create
 */
export function GUILD_CREATE(client: Client, gatewayShard: GatewayShard, guildPayload: GatewayDispatchGuildCreateEventPayload) {
	const { cache, events } = client;
	const { guilds } = cache;

	const { id: guildId } = guildPayload;
	const guild = new Guild(client, guildPayload);

	guilds.set(guildId, guild);

	events.emit(ClientEvents.GuildCreate, {
		gatewayShard,
		guild,
	});
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-update
 */
export function GUILD_UPDATE(client: Client, gatewayShard: GatewayShard, guildPayload: GatewayDispatchGuildUpdateEventPayload) {
	const { cache, events } = client;
	const { guilds } = cache;

	const { id: guildId } = guildPayload;
	const cachedGuild = guilds.get(guildId);

	if (cachedGuild) {
		const oldGuild = cachedGuild['clone']();

		cachedGuild['patch'](guildPayload);
		events.emit(ClientEvents.GuildUpdate, {
			gatewayShard,
			newGuild: cachedGuild,
			oldGuild,
		});
	} else {
		const newGuild = new Guild(client, guildPayload);
		const oldGuild = new Uncached(guildId);

		events.emit(ClientEvents.GuildUpdate, {
			gatewayShard,
			newGuild,
			oldGuild,
		});
	}
}
