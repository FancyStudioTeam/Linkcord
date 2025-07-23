import type { APIMessage } from "#types/discord/payloads/Messages.js";
import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * TODO: Add missing properties to `GatewayDispatchMessageCreatePayload`.
 */
export interface GatewayDispatchMessageCreatePayload extends APIMessage {
	guild_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#message-create
 */
export type GatewayDispatchMessageCreate = GatewayDispatchEventBase<
	GatewayDispatchEvents.MessageCreate,
	GatewayDispatchMessageCreatePayload
>;
