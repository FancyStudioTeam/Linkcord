import type { APIUnavailableGuild } from "#types/discord/payloads/Guilds.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-delete
 */
export interface GatewayDispatchGuildDeletePayload
	extends Omit<APIUnavailableGuild, "unavailable"> {
	unavailable?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-delete
 */
export type GatewayDispatchGuildDelete = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildDelete,
	GatewayDispatchGuildDeletePayload
>;
