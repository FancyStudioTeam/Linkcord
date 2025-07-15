import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-scheduled-event-user-remove-guild-scheduled-event-user-remove-event-fields
 */
export interface GatewayDispatchGuildScheduledEventUserRemovePayload {
	guild_id: Snowflake;
	guild_scheduled_event_id: Snowflake;
	user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-scheduled-event-user-remove
 */
export type GatewayDispatchGuildScheduledEventUserRemove = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildScheduledEventUserRemove,
	GatewayDispatchGuildScheduledEventUserRemovePayload
>;
