import type { GatewayShard } from "#gateway/index.js";
import type { ChatInputCommandInteraction } from "#structures/discord/ChatInputCommandInteraction.js";
import type { Guild, Role, User } from "#structures/index.js";
import type { GatewayEvent, Snowflake } from "#types/index.js";
import type { MaybeUncached } from "#utils/types.js";
import type { Client } from "./Client.js";

/**
 * @public
 */
export interface ClientEventsMap {
	debug: [message: string];
	guildCreate: [guild: Guild];
	guildDelete: [guild: MaybeUncached<Guild>];
	guildRoleCreate: [role: Role, guild: MaybeUncached<Guild>];
	guildRoleDelete: [role: MaybeUncached<Role>, guild: MaybeUncached<Guild>];
	guildRoleUpdate: [newRole: Role, oldRole: MaybeUncached<Role>, guild: MaybeUncached<Guild>];
	guildUpdate: [newGuild: Guild, oldGuild: MaybeUncached<Guild>];
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
