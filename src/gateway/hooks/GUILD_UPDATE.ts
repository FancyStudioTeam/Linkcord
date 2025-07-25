import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Guild } from "#structures/index.js";
import { Uncached } from "#structures/Uncached.js";
import type { GatewayDispatchGuildUpdatePayload } from "#types/index.js";

export const GUILD_UPDATE = (
	client: Client,
	_shard: GatewayShard,
	guildData: GatewayDispatchGuildUpdatePayload,
) => {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;

	const { id: guildId } = guildData;

	const guild = new Guild(client, guildData);
	const oldGuild = guildsCache.get(guildId) ?? new Uncached(guildId);

	/**
	 * biome-ignore lint/complexity/useLiteralKeys: Accessing private members
	 * from the manager.
	 */
	guilds["patch"](guildId, guildData);
	events.emit("guildUpdate", guild, oldGuild);
};
