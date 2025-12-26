import type { GatewayShard } from '#gateway/index.js';
import type { Message, User } from '#structures/index.js';
import type { GatewayEvent } from '#types/index.js';

export interface ClientDebugOptions {
	label?: string;
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
	[ClientEvents.ShardDisconnected]: [
		params: ClientShardDisconnectedEventParams,
	];
	[ClientEvents.ShardHello]: [
		params: ClientShardHelloEventParams,
	];
	[ClientEvents.ShardPacket]: [
		params: ClientShardPacketEventParams,
	];
	[ClientEvents.ShardReady]: [
		params: ClientShardReadyEventParams,
	];
	[ClientEvents.Warn]: [
		params: ClientWarningEventParams,
	];
}

export interface ClientMessageEventParams {
	gatewayShard: GatewayShard;
	message: Message;
}

export interface ClientShardDisconnectedEventParams {
	code: number;
	gatewayShard: GatewayShard;
	isReconnectable: boolean;
	reason: string;
}

export interface ClientShardHelloEventParams {
	heartbeatInterval: number;
	heartbeatJitter: number;
	gatewayShard: GatewayShard;
}

export interface ClientShardPacketEventParams {
	gatewayShard: GatewayShard;
	packet: GatewayEvent;
}

export interface ClientShardReadyEventParams {
	gatewayShard: GatewayShard;
	user: User;
}

export interface ClientWarningEventParams {
	message: string;
}

export enum ClientEvents {
	ClientReady = 'clientReady',
	Debug = 'debug',
	MessageCreate = 'messageCreate',
	ShardDisconnected = 'shardDisconnected',
	ShardHello = 'shardHello',
	ShardPacket = 'shardPacket',
	ShardReady = 'shardReady',
	Warn = 'warn',
}
