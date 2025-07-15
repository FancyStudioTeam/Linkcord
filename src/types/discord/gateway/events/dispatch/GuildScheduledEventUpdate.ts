import type { APIGuildScheduledEvent } from "#types/discord/payloads/GuildScheduledEvents.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-scheduled-event-update
 */
export type GatewayDispatchGuildScheduledEventUpdate = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildScheduledEventUpdate,
	GatewayDispatchGuildScheduledEventUpdatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-scheduled-event-update
 */
export type GatewayDispatchGuildScheduledEventUpdatePayload = APIGuildScheduledEvent;
