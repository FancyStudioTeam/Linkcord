import type { Client } from "#client/Client.js";
import { type GatewayShard, GatewayShardStatus } from "#gateway/structures/GatewayShard.js";
import { User } from "#structures/index.js";
import type { GatewayDispatchReadyPayload } from "#types/index.js";

export const READY = (
	client: Client,
	shard: GatewayShard,
	{ user: userData }: GatewayDispatchReadyPayload,
) => {
	shard.status = GatewayShardStatus.Ready;

	const { events, users } = client;
	const { manager } = shard;

	const { id: userId } = userData;
	const user = new User(userId, userData);

	/**
	 * biome-ignore lint/complexity/useLiteralKeys: Accessing private members
	 * from the manager.
	 */
	users["add"](userId, user);
	events.emit("shardReady", user, shard);
	/**
	 * biome-ignore lint/complexity/useLiteralKeys: Accessing private members
	 * from the manager.
	 */
	manager["checkReady"]();
};
