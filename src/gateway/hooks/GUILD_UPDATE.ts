import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import type { GatewayDispatchGuildUpdatePayload } from "#types/index.js";

export const GUILD_UPDATE = (
	client: Client,
	_shard: GatewayShard,
	guildData: GatewayDispatchGuildUpdatePayload,
) => {
	const { events, guilds } = client;
	const { cache } = guilds;
	const { id: guildId } = guildData;

	/**
	 * biome-ignore lint/complexity/useLiteralKeys: Accessing private members
	 * from the manager.
	 */
	guilds["patch"](guildId, guildData);

	const guild = cache.get(guildId);

	if (guild) {
		return events.emit("guildUpdate", guild);
	}

	events.emit("guildUpdate", {
		id: guildId,
		uncached: true,
	});
};
