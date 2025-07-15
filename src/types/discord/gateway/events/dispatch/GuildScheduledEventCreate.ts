import type { APIGuildScheduledEvent } from "#types/discord/payloads/GuildScheduledEvents.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-scheduled-event-create
 */
export type GatewayDispatchGuildScheduledEventCreate = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildScheduledEventCreate,
	GatewayDispatchGuildScheduledEventCreatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-scheduled-event-create
 */
export type GatewayDispatchGuildScheduledEventCreatePayload = APIGuildScheduledEvent;
