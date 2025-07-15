import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#integration-delete-integration-delete-event-fields
 */
export interface GatewayDispatchIntegrationDeletePayload {
	application_id?: Snowflake;
	guild_id: Snowflake;
	id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#integration-delete
 */
export type GatewayDispatchIntegrationDelete = GatewayDispatchEventBase<
	GatewayDispatchEvents.IntegrationDelete,
	GatewayDispatchIntegrationDeletePayload
>;
