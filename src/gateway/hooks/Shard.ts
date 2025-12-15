/*
 * biome-ignore-all lint/complexity/useLiteralKeys: Accessing private or
 * protected members requires bracket notation in this context.
 */

import { type Client, ClientEvents } from "#client/index.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { GatewayShardStatus } from "#gateway/types/index.js";
import { User } from "#structures/index.js";
import type { GatewayDispatchReadyEventPayload } from "#types/index.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#ready
 */
export function READY(client: Client, shard: GatewayShard, readyPayload: GatewayDispatchReadyEventPayload): void {
	const { cache, events } = client;
	const { manager } = shard;

	const { resume_gateway_url, session_id, user: userData } = readyPayload;

	shard.status = GatewayShardStatus.Ready;
	shard["resumeGatewayURL"] = resume_gateway_url;
	shard["sessionId"] = session_id;

	const user = new User(client, userData);
	const { id: userId } = user;

	const { users } = cache;

	users.set(userId, user);
	manager["triggerReady"]();

	events.emit(ClientEvents.ShardReady, shard);
}
