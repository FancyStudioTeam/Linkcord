import type { GatewayShard } from '#gateway/index.js';
import type { Guild, GuildMember, Message, Uncached, User } from '#structures/index.js';
import type { GatewayEvent } from '#types/index.js';

export interface ClientDebugOptions {
	label?: string;
	pairs?: ClientDebugPair[];
}

export interface ClientDebugEventParams {
	message: string;
}

export interface ClientEventsMap {
	[ClientEvents.ClientReady]: [];
	[ClientEvents.Debug]: [
		params: ClientDebugEventParams,
	];
	[ClientEvents.MessageCreate]: [
		params: ClientMessageEventParams,
	];
	[ClientEvents.GatewayShardDisconnected]: [
		params: ClientGatewayShardDisconnectedEventParams,
	];
	[ClientEvents.GatewayShardHello]: [
		params: ClientGatewayShardHelloEventParams,
	];
	[ClientEvents.GatewayShardPacket]: [
		params: ClientGatewayShardPacketEventParams,
	];
	[ClientEvents.GatewayShardReady]: [
		params: ClientGatewayShardReadyEventParams,
	];
	[ClientEvents.GuildCreate]: [
		params: ClientGuildCreateEventParams,
	];
	[ClientEvents.GuildDelete]: [
		params: ClientGuildDeleteEventParams,
	];
	[ClientEvents.GuildMemberUpdate]: [
		params: ClientGuildMemberUpdateEventParams,
	];
	[ClientEvents.GuildUpdate]: [
		params: ClientGuildUpdateEventParams,
	];
}

export interface ClientGatewayShardDisconnectedEventParams {
	code: number;
	gatewayShard: GatewayShard;
	isReconnectable: boolean;
	reason: string;
}

export interface ClientGatewayShardHelloEventParams {
	heartbeatInterval: number;
	heartbeatJitter: number;
	gatewayShard: GatewayShard;
}

export interface ClientGatewayShardPacketEventParams {
	gatewayShard: GatewayShard;
	packet: GatewayEvent;
}

export interface ClientGatewayShardReadyEventParams {
	gatewayShard: GatewayShard;
	user: User;
}

export interface ClientGuildCreateEventParams {
	gatewayShard: GatewayShard;
	guild: Guild;
}

export interface ClientGuildDeleteEventParams {
	gatewayShard: GatewayShard;
	guild: Guild | Uncached;
}

export interface ClientGuildMemberUpdateEventParams {
	gatewayShard: GatewayShard;
	newMember: GuildMember;
	oldMember: GuildMember | Uncached;
}

export interface ClientGuildUpdateEventParams {
	gatewayShard: GatewayShard;
	newGuild: Guild;
	oldGuild: Guild | Uncached;
}

export interface ClientMessageEventParams {
	gatewayShard: GatewayShard;
	message: Message;
}

export interface ClientWarningEventParams {
	message: string;
}

export type ClientDebugPair = readonly [
	Key: string,
	Value: string,
];

export enum ClientEvents {
	ClientReady = 'clientReady',
	Debug = 'debug',
	GatewayShardDisconnected = 'shardDisconnected',
	GatewayShardHello = 'shardHello',
	GatewayShardPacket = 'shardPacket',
	GatewayShardReady = 'shardReady',
	GuildCreate = 'guildCreate',
	GuildDelete = 'guildDelete',
	GuildMemberUpdate = 'guildMemberUpdate',
	GuildUpdate = 'guildUpdate',
	MessageCreate = 'messageCreate',
}
