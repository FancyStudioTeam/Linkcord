import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-scheduled-event-user-add-guild-scheduled-event-user-add-event-fields
 */
export interface GatewayDispatchGuildScheduledEventUserAddPayload {
	guild_id: Snowflake;
	guild_scheduled_event_id: Snowflake;
	user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-scheduled-event-user-add
 */
export type GatewayDispatchGuildScheduledEventUserAdd = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildScheduledEventUserAdd,
	GatewayDispatchGuildScheduledEventUserAddPayload
>;
