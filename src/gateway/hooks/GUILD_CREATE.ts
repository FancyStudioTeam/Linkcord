import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Guild } from "#structures/index.js";
import type { GatewayDispatchGuildCreatePayload } from "#types/index.js";

export const GUILD_CREATE = (
	client: Client,
	_shard: GatewayShard,
	guildData: GatewayDispatchGuildCreatePayload,
) => {
	const { events, guilds } = client;
	const { id: guildId, unavailable } = guildData;

	if (unavailable) {
		return;
	}

	const guild = new Guild(guildId, guildData);

	/**
	 * biome-ignore lint/complexity/useLiteralKeys: Accessing private members
	 * from the manager.
	 */
	guilds["add"](guildId, guild);
	events.emit("guildCreate", guild);
};
