import type { GatewayShard } from "#gateway/index.js";
import type { ChatInputCommandInteraction } from "#structures/discord/ChatInputCommandInteraction.js";
import type { Guild, Role, User } from "#structures/index.js";
import type { GatewayEvent, Snowflake } from "#types/index.js";

/**
 * @public
 */
export interface ClientEventsMap {
    debug: [message: string];
    guildCreate: [guild: Guild];
    guildRoleCreate: [role: Role, guildId: Snowflake];
    guildRoleDelete: [roleId: Snowflake, guildId: Snowflake];
    guildRoleUpdate: [newRole: Role, oldRole: Role | Uncached, guildId: Snowflake];
    interactionCreate: [interaction: ChatInputCommandInteraction];
    ready: [];
    shardHello: [heartbeatInterval: number, shard: GatewayShard];
    shardPacket: [packet: GatewayEvent, shard: GatewayShard];
    shardReady: [user: User, shard: GatewayShard];
}

/**
 * @public
 */
export interface Uncached {
    id: Snowflake;
    uncached: true;
}

/**
 * @public
 */
export type ClientEventsString = keyof ClientEventsMap;
