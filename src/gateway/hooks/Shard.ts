/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket
 * notation when accessing private or protected members from some structures.
 */

import { type Client, ClientEvents } from "#client/index.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { GatewayShardStatus } from "#gateway/types/index.js";
import { User } from "#structures/index.js";
import type { GatewayDispatchReadyPayload } from "#types/index.js";

/**
 * Handles the received `READY` event from the gateway shard.
 * @param client - The main client instance to manage the event.
 * @param shard - The gateway shard that received the event.
 * @param readyData - The received data from the `READY` event.
 * @see https://discord.com/developers/docs/events/gateway-events#ready
 */
export function READY(
	client: Client,
	shard: GatewayShard,
	readyData: GatewayDispatchReadyPayload,
): void {
	const { events, users } = client;
	const { manager } = shard;
	const { resume_gateway_url, session_id, user: userData } = readyData;

	shard.status = GatewayShardStatus.Ready;
	shard["__resumeGatewayURL__"] = resume_gateway_url;
	shard["__sessionId__"] = session_id;

	const user = new User(client, userData);
	const { id: userId } = user;

	users["__add__"](userId, user);
	manager["__triggerReady__"]();

	events.emit(ClientEvents.ShardReady, shard);
}
