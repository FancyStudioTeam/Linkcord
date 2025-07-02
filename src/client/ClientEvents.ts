import type { GatewayShard } from "#gateway/index.js";
import type { ChatInputCommandInteraction } from "#structures/discord/ChatInputCommandInteraction.js";
import type { Guild, Role, User } from "#structures/index.js";
import type { GatewayEvent, Snowflake } from "#types/index.js";
import type { Client } from "./Client.js";

/**
 * @public
 */
export interface ClientEventsMap {
    debug: [message: string];
    guildCreate: [guild: Guild];
    guildDelete: [guild: Guild | Uncached];
    guildRoleCreate: [role: Role, guildId: Snowflake];
    guildRoleDelete: [roleId: Snowflake, guildId: Snowflake];
    guildRoleUpdate: [newRole: Role, oldRole: Role | Uncached, guildId: Snowflake];
    guildUpdate: [newGuild: Guild, oldGuild: Guild | Uncached];
    interactionCreate: [interaction: ChatInputCommandInteraction];
    ready: [client: Client];
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
