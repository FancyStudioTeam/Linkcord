/* biome-ignore-all lint/style/useNamingConvention: Function names must be the exact name as the corresponding dispatch event. */

import { type Client, ClientEvents } from "#client/index.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Message } from "#structures/Message.js";
import type { GatewayDispatchMessageCreateEventPayload } from "#types/index.js";

export function MESSAGE_CREATE(
	client: Client,
	_shard: GatewayShard,
	messagePayload: GatewayDispatchMessageCreateEventPayload,
): void {
	const message = new Message(client, messagePayload);

	client.emit(ClientEvents.MessageCreate, message);
}
