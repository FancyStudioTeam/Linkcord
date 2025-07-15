import type { APIChannel } from "#types/discord/payloads/Channels.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#channel-create
 */
export type GatewayDispatchChannelCreate = GatewayDispatchEventBase<
	GatewayDispatchEvents.ChannelCreate,
	GatewayDispatchChannelCreatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#channel-create
 */
export type GatewayDispatchChannelCreatePayload = APIChannel;
