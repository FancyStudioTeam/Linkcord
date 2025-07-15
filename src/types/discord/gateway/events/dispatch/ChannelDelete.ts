import type { APIChannel } from "#types/discord/payloads/Channels.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#channel-delete
 */
export type GatewayDispatchChannelDelete = GatewayDispatchEventBase<
	GatewayDispatchEvents.ChannelDelete,
	GatewayDispatchChannelDeletePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#channel-delete
 */
export type GatewayDispatchChannelDeletePayload = APIChannel;
