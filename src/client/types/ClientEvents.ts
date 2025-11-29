import type { GatewayShard } from "#gateway/index.js";
import type { Message, Uncached, User } from "#structures/index.js";
import type { GatewayEvent } from "#types/index.js";

export interface ClientEventsMap {
	[ClientEvents.ClientReady]: [];
	[ClientEvents.Debug]: [
		message: string,
	];
	[ClientEvents.MessageCreate]: [
		message: Message,
	];
	[ClientEvents.ShardDisconnected]: [
		reason: string,
		code: number,
		resumable: boolean,
		gatewayShard: GatewayShard,
	];
	[ClientEvents.ShardHello]: [
		heartbeatInterval: number,
		gatewayShard: GatewayShard,
	];
	[ClientEvents.ShardPacket]: [
		packet: GatewayEvent,
		gatewayShard: GatewayShard,
	];
	[ClientEvents.ShardReady]: [
		gatewayShard: GatewayShard,
	];
	[ClientEvents.UserUpdate]: [
		newUser: User,
		oldUser: UserOrUncached,
	];
	[ClientEvents.Warn]: [
		warning: string,
	];
}

export type UserOrUncached = User | Uncached;

export enum ClientEvents {
	ClientReady = "clientReady",
	Debug = "debug",
	MessageCreate = "messageCreate",
	ShardDisconnected = "shardDisconnected",
	ShardHello = "shardHello",
	ShardPacket = "shardPacket",
	ShardReady = "shardReady",
	UserUpdate = "userUpdate",
	Warn = "warn",
}
