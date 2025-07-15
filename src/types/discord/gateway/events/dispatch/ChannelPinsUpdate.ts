import type { ISO8601Date, Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#channel-pins-update-channel-pins-update-event-fields
 */
export interface GatewayDispatchChannelPinsUpdatePayload {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	last_pin_timestamp?: ISO8601Date | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#channel-pins-update
 */
export type GatewayDispatchChannelPinsUpdate = GatewayDispatchEventBase<
	GatewayDispatchEvents.ChannelPinsUpdate,
	GatewayDispatchChannelPinsUpdatePayload
>;
