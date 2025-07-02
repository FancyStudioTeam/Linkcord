import type { APIInteraction } from "#types/raw/payloads/Interactions.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#interaction-create
 */
export type GatewayDispatchInteractionCreate = GatewayDispatchEventBase<
	GatewayDispatchEvents.InteractionCreate,
	GatewayDispatchInteractionCreatePayload
>;

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type GatewayDispatchInteractionCreatePayload = APIInteraction;
