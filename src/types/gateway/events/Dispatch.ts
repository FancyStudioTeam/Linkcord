import type { GatewayDispatchEvents, GatewayOpcodes } from '../enums.js';
import type { GatewayEventBase } from './Base.js';
import type { GatewayDispatchMessageCreateEvent } from './MessageCreate.js';
import type { GatewayDispatchReadyEvent } from './Ready.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#payload-structure
 */
export interface GatewayDispatchEventBase<Event extends GatewayDispatchEvents, Data>
	extends GatewayEventBase<GatewayOpcodes.Dispatch, Data> {
	s: number | null;
	t: Event;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#receive-events
 */
export type GatewayDispatchEvent = GatewayDispatchMessageCreateEvent | GatewayDispatchReadyEvent;
