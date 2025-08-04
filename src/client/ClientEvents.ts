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
	/**
	 * Emitted when a message is received internally by the client.
	 * @param message - The message that was received.
	 */
	debug: [message: string];
	/**
	 * Emitted when a guild is created.
	 * @param guild - The guild that was created.
	 */
	guildCreate: [guild: Guild];
	/**
	 * Emitted when a guild is deleted.
	 * @param guild - The guild that was deleted, if cached.
	 */
	guildDelete: [guild: MaybeUncached<Guild>];
	/**
	 * Emitted when a guild role is created.
	 * @param role - The role that was created.
	 * @param guild - The guild where the role was created.
	 */
	guildRoleCreate: [role: Role, guild: Guild];
	/**
	 * Emitted when a guild role is deleted.
	 * @param role - The role that was deleted, if cached.
	 * @param guild - The guild where the role was deleted.
	 */
	guildRoleDelete: [role: MaybeUncached<Role>, guild: Guild];
	/**
	 * Emitted when a guild role is updated.
	 * @param newRole - The updated {@link Role | `Role`} instance.
	 * @param oldRole - The old {@link Role | `Role`} instance, if cached.
	 * @param guild - The guild where the role was updated.
	 */
	guildRoleUpdate: [newRole: Role, oldRole: MaybeUncached<Role>, guild: Guild];
	/**
	 * Emitted when a guild is updated.
	 * @param newGuild - The updated {@link Guild | `Guild`} instance.
	 * @param oldGuild - The old {@link Guild | `Guild`} instance, if cached.
	 */
	guildUpdate: [newGuild: Guild, oldGuild: MaybeUncached<Guild>];
	/**
	 * Emitted when an interaction is created.
	 * @param interaction - The interaction that was created.
	 */
	interactionCreate: [interaction: ChatInputCommandInteraction];
	/**
	 * Emitted when the client is fully ready.
	 * @param client - The main client instance.
	 */
	ready: [client: Client];
	/**
	 * Emitted when a gateway shard disconnects.
	 * @param reason - The reason for disconnecting.
	 * @param code - The close event code.
	 * @param reconnectable - Whether the session can be resumable.
	 * @param shard - The gateway shard that disconnected.
	 */
	shardDisconnected: [
		reason: string,
		code: GatewayCloseEventCodes,
		reconnectable: boolean,
		shard: GatewayShard,
	];
	/**
	 * Emitted when a gateway shard receives the `HELLO` event.
	 * @param heartbeatInterval - The heartbeat interval of the shard.
	 * @param shard - The gateway shard that received the `HELLO` event.
	 */
	shardHello: [heartbeatInterval: number, shard: GatewayShard];
	/**
	 * Emitted when a gateway shard receives a packet.
	 * @param packet - The received packet.
	 * @param shard - The gateway shard that received the packet.
	 */
	shardPacket: [packet: GatewayEvent, shard: GatewayShard];
	/**
	 * Emitted when the gateway shard receives the `READY` event.
	 * @param user - The {@link User | `User`} instance of the application.
	 * @param shard - The gateway shard that received the `READY` event.
	 */
	shardReady: [user: User, shard: GatewayShard];
	/**
	 * Emitted when an user is updated.
	 * @param newUser - The updated {@link User | `User`} instance.
	 * @param oldUser - The old {@link User | `User`} instance, if cached.
	 */
	userUpdate: [newUser: User, oldUser: MaybeUncached<User>];
}

/**
 * The main client events as strings.
 * @public
 */
export type ClientEventsString = keyof ClientEventsMap;
