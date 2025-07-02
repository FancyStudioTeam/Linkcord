import type { APIGuild } from "#types/raw/payloads/Guilds.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-update
 */
export type GatewayDispatchGuildUpdate = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildUpdate,
	GatewayDispatchGuildUpdatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-update
 */
export type GatewayDispatchGuildUpdatePayload = APIGuild;
