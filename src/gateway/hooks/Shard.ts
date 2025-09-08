/* biome-ignore-all lint/complexity/useLiteralKeys: Allow to use bracket notation when accessing private or protected members from some structures. */

import { type Client, ClientEvents } from "#client/index.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { GatewayShardStatus } from "#gateway/types/index.js";
import { User } from "#structures/index.js";
import type { GatewayDispatchReadyEventPayload } from "#types/index.js";

/**
 * Handles the received {@link GatewayDispatchEvent | `READY`} event from the gateway shard.
 * @param client - The main client instance to manage the event.
 * @param shard - The gateway shard that received the event.
 * @param readyPayload - The received payload from the {@link GatewayDispatchEvent | `READY`} event.
 * @see https://discord.com/developers/docs/events/gateway-events#ready
 */
export function READY(client: Client, shard: GatewayShard, readyPayload: GatewayDispatchReadyEventPayload): void {
	const { events, users } = client;
	const { manager } = shard;
	const { resume_gateway_url, session_id, user: userData } = readyPayload;

	shard.status = GatewayShardStatus.Ready;
	shard["resumeGatewayURL"] = resume_gateway_url;
	shard["sessionId"] = session_id;

	const user = new User(client, userData);
	const { id: userId } = user;

	users.add(userId, user);
	manager["triggerReady"]();

	events.emit(ClientEvents.ShardReady, shard);
}
