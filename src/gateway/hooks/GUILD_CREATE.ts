import type { Client } from "#client/Client.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Guild } from "#structures/index.js";
import type { GatewayDispatchGuildCreatePayload } from "#types/index.js";

export const GUILD_CREATE = (
    client: Client,
    _shard: GatewayShard,
    guildData: GatewayDispatchGuildCreatePayload,
) => {
    const { events, unavailableGuilds } = client;
    const { id: guildId, unavailable } = guildData;

    if (unavailable) {
        return;
    }

    if (unavailableGuilds.has(guildId)) {
        unavailableGuilds.delete(guildId);

        return;
    }

    const guild = new Guild(guildId, guildData);

    events.emit("guildCreate", guild);
};
