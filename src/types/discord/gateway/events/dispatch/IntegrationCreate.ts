import type { APIIntegration } from "#types/discord/payloads/Guilds.js";
import type { Snowflake } from "#types/discord/shared/discord.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#integration-create-integration-create-event-additional-fields
 */
export interface GatewayDispatchIntegrationCreatePayload extends Omit<APIIntegration, "user"> {
	guild_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#integration-create
 */
export type GatewayDispatchIntegrationCreate = GatewayDispatchEventBase<
	GatewayDispatchEvents.IntegrationCreate,
	GatewayDispatchIntegrationCreatePayload
>;
