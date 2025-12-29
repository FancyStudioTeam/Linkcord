import type { GatewayShard } from '#gateway/index.js';
import type { RestRequestData, RestResponseData } from '#rest/index.js';
import type { Guild, GuildMember, Message, Uncached, User } from '#structures/index.js';
import type { GatewayEvent } from '#types/index.js';

export interface ClientDebugOptions {
	label?: string;
	pairs?: ClientDebugPair[];
}

export interface ClientEventsMap {
	[ClientEvents.ClientReady]: [
		params: ClientReadyEventParams,
	];
	[ClientEvents.Debug]: [
		params: DebugEventParams,
	];
	[ClientEvents.MessageCreate]: [
		params: MessageCreateEventParams,
	];
	[ClientEvents.GatewayShardDisconnect]: [
		params: GatewayShardDisconnectEventParams,
	];
	[ClientEvents.GatewayShardHello]: [
		params: GatewayShardHelloEventParams,
	];
	[ClientEvents.GatewayShardPacket]: [
		params: GatewayShardPacketEventParams,
	];
	[ClientEvents.GatewayShardReady]: [
		params: GatewayShardReadyEventParams,
	];
	[ClientEvents.GuildCreate]: [
		params: GuildCreateEventParams,
	];
	[ClientEvents.GuildDelete]: [
		params: GuildDeleteEventParams,
	];
	[ClientEvents.GuildMemberUpdate]: [
		params: GuildMemberUpdateEventParams,
	];
	[ClientEvents.GuildUpdate]: [
		params: GuildUpdateEventParams,
	];
	[ClientEvents.RestRequest]: [
		params: RestRequestEventParams,
	];
	[ClientEvents.UserUpdate]: [
		params: UserUpdateEventParams,
	];
}

export interface ClientReadyEventParams {
	user: User;
}

export interface DebugEventParams {
	message: string;
}

export interface GatewayShardDisconnectEventParams {
	code: number;
	gatewayShard: GatewayShard;
	isReconnectable: boolean;
	reason: string;
}

export interface GatewayShardHelloEventParams {
	heartbeatInterval: number;
	heartbeatJitter: number;
	gatewayShard: GatewayShard;
}

export interface GatewayShardPacketEventParams {
	gatewayShard: GatewayShard;
	packet: GatewayEvent;
}

export interface GatewayShardReadyEventParams {
	gatewayShard: GatewayShard;
	user: User;
}

export interface GuildCreateEventParams {
	gatewayShard: GatewayShard;
	guild: Guild;
}

export interface GuildDeleteEventParams {
	gatewayShard: GatewayShard;
	guild: Guild | Uncached;
}

export interface GuildMemberUpdateEventParams {
	gatewayShard: GatewayShard;
	newMember: GuildMember;
	oldMember: GuildMember | Uncached;
}

export interface GuildUpdateEventParams {
	gatewayShard: GatewayShard;
	newGuild: Guild;
	oldGuild: Guild | Uncached;
}

export interface MessageCreateEventParams {
	gatewayShard: GatewayShard;
	message: Message;
}

export interface RestRequestEventParams {
	url: string;
	request: RestRequestData;
	response: RestResponseData;
}

export interface UserUpdateEventParams {
	gatewayShard: GatewayShard;
	newUser: User;
	oldUser: User | Uncached;
}

export type ClientDebugPair = readonly [
	Key: string,
	Value: string,
];

export enum ClientEvents {
	ClientReady = 'clientReady',
	Debug = 'debug',
	GatewayShardDisconnect = 'gatewayShardDisconnect',
	GatewayShardHello = 'gatewayShardHello',
	GatewayShardPacket = 'gatewayShardPacket',
	GatewayShardReady = 'gatewayShardReady',
	GuildCreate = 'guildCreate',
	GuildDelete = 'guildDelete',
	GuildMemberUpdate = 'guildMemberUpdate',
	GuildUpdate = 'guildUpdate',
	MessageCreate = 'messageCreate',
	RestRequest = 'restRequest',
	UserUpdate = 'userUpdate',
}
