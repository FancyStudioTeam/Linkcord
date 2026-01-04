/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Accessing private or
 * protected members requires bracket notation in this context.
 *
 * biome-ignore-all lint/style/useNamingConvention: Function names must exactly
 * match Discord dispatch event names.
 */

import { type Client, ClientEvents } from '#client/index.js';
import type { GatewayShard } from '#gateway/structures/GatewayShard.js';
import { Guild } from '#structures/Guild.js';
import { GuildMember } from '#structures/GuildMember.js';
import { Uncached } from '#structures/Uncached.js';
import type {
	GatewayDispatchGuildCreateEventPayload,
	GatewayDispatchGuildMemberUpdateEventPayload,
	GatewayDispatchGuildUpdateEventPayload,
} from '#types/index.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-create
 */
export function GUILD_CREATE(client: Client, gatewayShard: GatewayShard, guildPayload: GatewayDispatchGuildCreateEventPayload): void {
	const { cache, events } = client;
	const { guilds } = cache;

	const { id: guildId } = guildPayload;

	const initialGuildsSet = gatewayShard['initialGuilds'];
	const isInitialGuild = initialGuildsSet.has(guildId);

	/*
	 * If the guild ID was stored in the initial guild IDs, do not emit the
	 * 'GUILD_CREATE' event.
	 */
	if (isInitialGuild) {
		initialGuildsSet.delete(guildId);

		return;
	}

	const guild = new Guild(client, guildPayload);

	guilds.set(guildId, guild);

	events.emit(ClientEvents.GuildCreate, {
		gatewayShard,
		guild,
	});
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-member-update
 */
export function GUILD_MEMBER_UPDATE(
	client: Client,
	gatewayShard: GatewayShard,
	guildMemberPayload: GatewayDispatchGuildMemberUpdateEventPayload,
): void {
	const { cache, events } = client;
	const { guilds } = cache;

	const { guild_id: guildId, user } = guildMemberPayload;
	const { id: userId } = user;

	const cachedGuild = guilds.get(guildId);

	if (cachedGuild) {
		const { members } = cachedGuild;
		const cachedMember = members.get(userId);

		if (cachedMember) {
			const oldMember = cachedMember['clone']();

			cachedMember['patch'](guildMemberPayload);
			events.emit(ClientEvents.GuildMemberUpdate, {
				gatewayShard,
				newMember: cachedMember,
				oldMember,
			});

			return;
		}
	}

	const { deaf, flags, joined_at, mute } = guildMemberPayload;
	const newMember = new GuildMember(client, {
		...guildMemberPayload,
		deaf: Boolean(deaf),
		flags: (flags ?? 0) as never,
		joined_at: joined_at ?? null,
		mute: Boolean(mute),
	});
	const oldMember = new Uncached(userId);

	events.emit(ClientEvents.GuildMemberUpdate, {
		gatewayShard,
		newMember,
		oldMember,
	});
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#guild-update
 */
export function GUILD_UPDATE(client: Client, gatewayShard: GatewayShard, guildPayload: GatewayDispatchGuildUpdateEventPayload): void {
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

		guilds.set(guildId, newGuild);
		events.emit(ClientEvents.GuildUpdate, {
			gatewayShard,
			newGuild,
			oldGuild,
		});
	}
}
