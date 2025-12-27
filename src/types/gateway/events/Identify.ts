import type { GatewayOpcodes } from '../enums.js';
import type { GatewayEventBase } from './Base.js';

/**
 * @see https://discord.com/developers/docs/events/gateway-events#identify-identify-structure
 */
export interface GatewayIdentifyEventPayload {
	compress?: boolean;
	intents: number;
	large_threshold?: number;
	properties: GatewayIdentifyEventPayloadProperties;
	shard?: [
		number,
		number,
	];
	token: string;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#identify-identify-connection-properties
 */
export interface GatewayIdentifyEventPayloadProperties {
	browser: string;
	device: string;
	os: string;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#identify
 */
export type GatewayIdentifyEvent = GatewayEventBase<GatewayOpcodes.Identify, GatewayIdentifyEventPayload>;
