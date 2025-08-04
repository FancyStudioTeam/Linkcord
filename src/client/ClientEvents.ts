import type { GatewayShard } from "#gateway/index.js";
import type { ChatInputCommandInteraction, Guild, Role, User } from "#structures/index.js";
import type { GatewayCloseEventCodes, GatewayEvent } from "#types/index.js";
import type { MaybeUncached } from "#utils/types.js";
import type { Client } from "./structures/Client.js";

/**
 * Represents a map of the main client events.
 * @public
 */
export interface ClientEventsMap {
	debug: [message: string];
	guildCreate: [guild: Guild];
	guildDelete: [guild: MaybeUncached<Guild>];
	guildRoleCreate: [role: Role, guild: Guild];
	guildRoleDelete: [role: MaybeUncached<Role>, guild: Guild];
	guildRoleUpdate: [newRole: Role, oldRole: MaybeUncached<Role>, guild: Guild];
	guildUpdate: [newGuild: Guild, oldGuild: MaybeUncached<Guild>];
	interactionCreate: [interaction: ChatInputCommandInteraction];
	ready: [client: Client];
	shardDisconnected: [
		reason: string,
		code: GatewayCloseEventCodes,
		reconnectable: boolean,
		shard: GatewayShard,
	];
	shardHello: [heartbeatInterval: number, shard: GatewayShard];
	shardPacket: [packet: GatewayEvent, shard: GatewayShard];
	shardReady: [user: User, shard: GatewayShard];
}

/**
 * The main client events as strings.
 * @public
 */
export type ClientEventsString = keyof ClientEventsMap;
