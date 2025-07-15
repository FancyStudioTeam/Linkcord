import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-integrations-update-guild-integrations-update-event-fields
 */
export interface GatewayDispatchGuildIntegrationsUpdatePayload {
	guild_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#guild-integrations-update
 */
export type GatewayDispatchGuildIntegrationsUpdate = GatewayDispatchEventBase<
	GatewayDispatchEvents.GuildIntegrationsUpdate,
	GatewayDispatchGuildIntegrationsUpdatePayload
>;
