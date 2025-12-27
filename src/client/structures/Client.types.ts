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
	[ClientEvents.Warn]: [
		params: ClientWarningEventParams,
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

export interface ClientMessageEventParams {
	gatewayShard: GatewayShard;
	message: Message;
}

export interface ClientWarningEventParams {
	message: string;
}

export enum ClientEvents {
	ClientReady = 'clientReady',
	Debug = 'debug',
	GatewayShardDisconnected = 'shardDisconnected',
	GatewayShardHello = 'shardHello',
	GatewayShardPacket = 'shardPacket',
	GatewayShardReady = 'shardReady',
	MessageCreate = 'messageCreate',
	Warn = 'warn',
}
