/*
 * biome-ignore-all lint/style/useNamingConvention: Function names must exactly
 * match Discord dispatch event names.
 */

import { type Client, ClientEvents } from "#client/index.js";
import type { GatewayShard } from "#gateway/structures/GatewayShard.js";
import { Message } from "#structures/Message.js";
import type { GatewayDispatchMessageCreateEventPayload } from "#types/index.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#message-create
 */
export function MESSAGE_CREATE(client: Client, gatewayShard: GatewayShard, messagePayload: GatewayDispatchMessageCreateEventPayload): void {
	const { events } = client;
	const message = new Message(client, messagePayload);

	events.emit(ClientEvents.MessageCreate, {
		gatewayShard,
		message,
	});
}
