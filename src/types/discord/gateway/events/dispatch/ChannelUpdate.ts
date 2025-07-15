import type { APIChannel } from "#types/discord/payloads/Channels.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#channel-update
 */
export type GatewayDispatchChannelUpdate = GatewayDispatchEventBase<
	GatewayDispatchEvents.ChannelUpdate,
	GatewayDispatchChannelUpdatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#channel-update
 */
export type GatewayDispatchChannelUpdatePayload = APIChannel;
