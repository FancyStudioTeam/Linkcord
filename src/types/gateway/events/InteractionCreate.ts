import type { APIInteraction } from '#types/resources/index.js';
import type { GatewayDispatchEvents } from '../enums.js';
import type { GatewayDispatchEventBase } from './Dispatch.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#interaction-create
 */
export type GatewayDispatchInteractionCreateEvent = GatewayDispatchEventBase<
	GatewayDispatchEvents.InteractionCreate,
	GatewayDispatchInteractionCreateEventPayload
>;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#interaction-create
 */
export type GatewayDispatchInteractionCreateEventPayload = APIInteraction;
