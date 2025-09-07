import type { GatewayShard } from "#gateway/index.js";
import type { Message, Uncached, User } from "#structures/index.js";
import type { GatewayEvent } from "#types/index.js";

/** Represents a map of the events that can be emitted by the client with their respective parameters. */
export interface ClientEventsMap {
	/** Emitted when all shards have been spawned and are ready. */
	[ClientEvents.ClientReady]: [];
	/**
	 * Emitted when a message is received internally by the client.
	 * @param message - The message that has been received.
	 */
	[ClientEvents.Debug]: [message: string];
	/**
	 * Emitted when a guild has been created.
	 * @param guild - The created {@link Guild | `Guild`} instance.
	 */
	// [ClientEvents.GuildCreate]: [guild: Guild];
	/**
	 * Emitted when a guild has been deleted.
	 * @param guild - The deleted {@link Guild | `Guild`} instance, if cached.
	 */
	// [ClientEvents.GuildDelete]: [guild: GuildOrUncached];
	/**
	 * Emitted when a role in a guild has been created.
	 * @param role - The created {@link Role | `Role`} instance.
	 * @param guild - The {@link Guild | `Guild`} where the role has been
	 * 	created.
	 */
	// [ClientEvents.GuildRoleCreate]: [role: Role, guild: Guild];
	/**
	 * Emitted when a role in a guild has been deleted.
	 * @param role - The deleted {@link Role | `Role`} instance, if cached.
	 * @param guild - The {@link Guild | `Guild`} where the role has been
	 * 	deleted.
	 */
	// [ClientEvents.GuildRoleDelete]: [role: RoleOrUncached, guild: Guild];
	/**
	 * Emitted when a role in a guild has been updated.
	 * @param newRole - The updated {@link Role | `Role`} instance.
	 * @param oldRole - The old {@link Role | `Role`} instance, if cached.
	 * @param guild - The {@link Guild | `Guild`} where the role has been
	 * 	updated.
	 */
	// [ClientEvents.GuildRoleUpdate]: [newRole: Role, oldRole: RoleOrUncached, guild: Guild];
	/**
	 * Emitted when a guild has been updated.
	 * @param newGuild - The updated {@link Guild | `Guild`} instance.
	 * @param oldGuild - The old {@link Guild | `Guild`} instance, if cached.
	 */
	// [ClientEvents.GuildUpdate]: [newGuild: Guild, oldGuild: GuildOrUncached];
	/**
	 * Emitted when an interaction has been created.
	 * @param interaction - The created
	 * 	{@link ChatInputCommandInteraction | `ChatInputCommandInteraction`}
	 * 	instance.
	 */
	// [ClientEvents.InteractionCreate]: [interaction: ChatInputCommandInteraction];
	/**
	 * Emitted when a message has been created.
	 * @param message - The created {@link Message | `Message`} instance.
	 */
	[ClientEvents.MessageCreate]: [message: Message];
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
	/**
	 * Emitted when a warning is received from the client.
	 * @param warning - The warning that has been received.
	 */
	[ClientEvents.Warn]: [warning: string];
}

/** Represents a guild that is either cached or uncached. */
// export type GuildOrUncached = Guild | Uncached;

/** Represents a role that is either cached or uncached. */
// export type RoleOrUncached = Role | Uncached;

/** Represents a user that is either cached or uncached. */
export type UserOrUncached = User | Uncached;

/** The events that can be emitted by the client. */
export enum ClientEvents {
	ClientReady = "clientReady",
	Debug = "debug",
	// GuildCreate = "guildCreate",
	// GuildDelete = "guildDelete",
	// GuildRoleCreate = "guildRoleCreate",
	// GuildRoleDelete = "guildRoleDelete",
	// GuildRoleUpdate = "guildRoleUpdate",
	// GuildUpdate = "guildUpdate",
	// InteractionCreate = "interactionCreate",
	MessageCreate = "messageCreate",
	ShardDisconnected = "shardDisconnected",
	ShardHello = "shardHello",
	ShardPacket = "shardPacket",
	ShardReady = "shardReady",
	UserUpdate = "userUpdate",
	Warn = "warn",
}
