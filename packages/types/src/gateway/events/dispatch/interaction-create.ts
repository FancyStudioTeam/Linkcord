import type { APIInteraction } from "#payloads";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../dispatch.js";

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
