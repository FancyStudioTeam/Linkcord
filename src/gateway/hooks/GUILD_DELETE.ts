import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Uncached } from "#structures/Uncached.js";
import type { GatewayDispatchGuildDeletePayload } from "#types/index.js";

export const GUILD_DELETE = (
	client: Client,
	_shard: GatewayShard,
	{ id: guildId }: GatewayDispatchGuildDeletePayload,
) => {
	const { events, guilds } = client;
	const { cache: guildsCache } = guilds;

	const guild = guildsCache.get(guildId) ?? new Uncached(guildId);

	/**
	 * biome-ignore lint/complexity/useLiteralKeys: Accessing private members
	 * from the manager.
	 */
	guilds["remove"](guildId);
	events.emit("guildDelete", guild);
};
