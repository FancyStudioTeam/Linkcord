import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#invite-delete-invite-delete-event-fields
 */
export interface GatewayDispatchInviteDeletePayload {
	channel_id: Snowflake;
	code: string;
	guild_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#invite-delete
 */
export type GatewayDispatchInviteDelete = GatewayDispatchEventBase<
	GatewayDispatchEvents.InviteDelete,
	GatewayDispatchInviteDeletePayload
>;
