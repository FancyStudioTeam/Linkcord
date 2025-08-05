/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket
 * notation when accessing private or protected members from some structures.
 */

import type { Client } from "#client/index.js";
import { type GatewayShard, GatewayShardStatus } from "#gateway/structures/GatewayShard.js";
import { User } from "#structures/index.js";
import type { GatewayDispatchReadyPayload } from "#types/index.js";

/**
 * Handles the `READY` event received from a gateway shard.
 * @param client - The main client instance to manage the event.
 * @param shard - The gateway shard that received the event.
 * @param readyData - The received data from the `READY` event.
 * @see https://discord.com/developers/docs/events/gateway-events#ready
 * @internal
 */
export function READY(
	client: Client,
	shard: GatewayShard,
	readyData: GatewayDispatchReadyPayload,
): void {
	shard.status = GatewayShardStatus.Ready;

	const { events, users } = client;
	const { manager } = shard;
	const { user: userData } = readyData;

	const user = new User(client, userData);
	const { id: userId } = user;

	users["__add__"](userId, user);
	// Try to trigger the `ready` event from the manager.
	manager["__triggerReady__"]();
	events.emit("shardReady", user, shard);
}
