import type { GatewayShard } from "#gateway/index.js";
import type {
	ChatInputCommandInteraction,
	Guild,
	Role,
	Uncached,
	User,
} from "#structures/index.js";
import type { GatewayEvent } from "#types/index.js";

/**
 * Represents a map of the events that can be emitted by the client with their
 * respective parameters.
 * @public
 */
export interface ClientEventsMap {
	/**
	 * Emitted when a message is received internally by the client.
	 * @param message - The message that has been received.
	 */
	[ClientEvents.Debug]: [message: string];
	/**
	 * Emitted when a guild has been created.
	 * @param guild - The created {@link Guild | `Guild`} instance.
	 */
	[ClientEvents.GuildCreate]: [guild: Guild];
	/**
	 * Emitted when a guild has been deleted.
	 * @param guild - The deleted {@link Guild | `Guild`} instance, if cached.
	 */
	[ClientEvents.GuildDelete]: [guild: GuildOrUncached];
	/**
	 * Emitted when a role in a guild has been created.
	 * @param role - The created {@link Role | `Role`} instance.
	 * @param guild - The {@link Guild | `Guild`} where the role has been
	 * 	created.
	 */
	[ClientEvents.GuildRoleCreate]: [role: Role, guild: Guild];
	/**
	 * Emitted when a role in a guild has been deleted.
	 * @param role - The deleted {@link Role | `Role`} instance, if cached.
	 * @param guild - The {@link Guild | `Guild`} where the role has been
	 * 	deleted.
	 */
	[ClientEvents.GuildRoleDelete]: [role: RoleOrUncached, guild: Guild];
	/**
	 * Emitted when a role in a guild has been updated.
	 * @param newRole - The updated {@link Role | `Role`} instance.
	 * @param oldRole - The old {@link Role | `Role`} instance, if cached.
	 * @param guild - The {@link Guild | `Guild`} where the role has been
	 * 	updated.
	 */
	[ClientEvents.GuildRoleUpdate]: [newRole: Role, oldRole: RoleOrUncached, guild: Guild];
	/**
	 * Emitted when a guild has been updated.
	 * @param newGuild - The updated {@link Guild | `Guild`} instance.
	 * @param oldGuild - The old {@link Guild | `Guild`} instance, if cached.
	 */
	[ClientEvents.GuildUpdate]: [newGuild: Guild, oldGuild: GuildOrUncached];
	/**
	 * Emitted when an interaction has been created.
	 * @param interaction - The created
	 * 	{@link ChatInputCommandInteraction | `ChatInputCommandInteraction`}
	 * 	instance.
	 */
	[ClientEvents.InteractionCreate]: [interaction: ChatInputCommandInteraction];
	/** Emitted when all shards have been spawned and are ready. */
	[ClientEvents.Ready]: [];
	/**
	 * Emitted when a shard has been disconnected.
	 * @param reason - The reason of the disconnection.
	 * @param code - The received close event code.
	 * @param resumable - Whether the session can be resumed.
	 * @param gatewayShard - The shard that has been disconnected.
	 */
	[ClientEvents.ShardDisconnected]: [
		reason: string,
		code: number,
		resumable: boolean,
		gatewayShard: GatewayShard,
	];
	/**
	 * Emitted when a shard receives a `HELLO` packet from the Discord
	 * gateway.
	 * @param heartbeatInterval - The interval at which a `HEARTBEAT` packet
	 * 	should be sent.
	 * @param gatewayShard - The shard that received the `HELLO` packet.
	 */
	[ClientEvents.ShardHello]: [heartbeatInterval: number, gatewayShard: GatewayShard];
	/**
	 * Emitted when a shard receives a packet from the Discord gateway.
	 * @param packet - The packet that has been received.
	 * @param gatewayShard - The shard that received the packet.
	 */
	[ClientEvents.ShardPacket]: [packet: GatewayEvent, gatewayShard: GatewayShard];
	/**
	 * Emitted when a shard receives a `READY` packet from the Discord
	 * gateway.
	 * @param gatewayShard - The shard that received the `READY` packet.
	 */
	[ClientEvents.ShardReady]: [gatewayShard: GatewayShard];
	/**
	 * Emitted when a user has been updated.
	 * @param newUser - The updated {@link User | `User`} instance.
	 * @param oldUser - The old {@link User | `User`} instance, if cached.
	 */
	[ClientEvents.UserUpdate]: [newUser: User, oldUser: UserOrUncached];
}

/**
 * Represents a guild that is either cached or uncached.
 * @public
 */
export type GuildOrUncached = Guild | Uncached;

/**
 * Represents a role that is either cached or uncached.
 * @public
 */
export type RoleOrUncached = Role | Uncached;

/**
 * Represents a user that is either cached or uncached.
 * @public
 */
export type UserOrUncached = User | Uncached;

/**
 * The events that can be emitted by the client.
 * @public
 */
export enum ClientEvents {
	Debug = "debug",
	GuildCreate = "guildCreate",
	GuildDelete = "guildDelete",
	GuildRoleCreate = "guildRoleCreate",
	GuildRoleDelete = "guildRoleDelete",
	GuildRoleUpdate = "guildRoleUpdate",
	GuildUpdate = "guildUpdate",
	InteractionCreate = "interactionCreate",
	Ready = "ready",
	ShardDisconnected = "shardDisconnected",
	ShardHello = "shardHello",
	ShardPacket = "shardPacket",
	ShardReady = "shardReady",
	UserUpdate = "userUpdate",
}
