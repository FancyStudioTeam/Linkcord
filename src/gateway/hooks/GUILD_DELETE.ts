import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import type { GatewayDispatchGuildDeletePayload } from "#types/index.js";

export const GUILD_DELETE = (
    client: Client,
    _shard: GatewayShard,
    { id: guildId }: GatewayDispatchGuildDeletePayload,
) => {
    const { events, guilds } = client;
    const { cache } = guilds;
    const guild = cache.get(guildId);

    /**
     * biome-ignore lint/complexity/useLiteralKeys: Accessing private members
     * from the manager.
     */
    guilds["remove"](guildId);

    if (guild) {
        return events.emit("guildDelete", guild);
    }

    events.emit("guildDelete", {
        id: guildId,
        uncached: true,
    });
};
