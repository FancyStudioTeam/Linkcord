import type { APIIntegration } from "#types/discord/payloads/Guilds.js";
import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#integration-update-integration-update-event-additional-fields
 */
export interface GatewayDispatchIntegrationUpdatePayload extends Omit<APIIntegration, "user"> {
	guild_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#integration-update
 */
export type GatewayDispatchIntegrationUpdate = GatewayDispatchEventBase<
	GatewayDispatchEvents.IntegrationUpdate,
	GatewayDispatchIntegrationUpdatePayload
>;
