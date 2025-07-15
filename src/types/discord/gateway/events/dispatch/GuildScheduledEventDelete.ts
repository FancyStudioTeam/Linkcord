import type { APIGuildScheduledEvent } from "#types/discord/payloads/GuildScheduledEvents.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-scheduled-event-delete
 */
export type GatewayDispatchGuildScheduledEventDelete = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildScheduledEventDelete,
	GatewayDispatchGuildScheduledEventDeletePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-scheduled-event-delete
 */
export type GatewayDispatchGuildScheduledEventDeletePayload = APIGuildScheduledEvent;
