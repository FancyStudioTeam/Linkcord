import type { GatewayDispatchEvents } from "#types/gateway";
import type { GatewayDispatchEventBase } from "#types/gateway/base/event";
import type { APIInteraction } from "#types/payloads";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#interaction-create
 */
export interface GatewayDispatchInteractionCreateEvent
  extends GatewayDispatchEventBase<
    GatewayDispatchEvents.InteractionCreate,
    GatewayDispatchInteractionCreateEventData
  > {}

/**
 * @public
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type GatewayDispatchInteractionCreateEventData = APIInteraction;
