import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes, GatewayPresenceUpdatePayload } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#identify
 */
export interface GatewayIdentifyEvent extends GatewayEventBase<GatewayOpcodes.Identify, GatewayIdentifyEventData> {}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#identify-identify-structure
 */
export interface GatewayIdentifyEventData {
  compress?: boolean;
  intents: number;
  large_threshold?: number;
  presence?: GatewayPresenceUpdatePayload;
  properties: GatewayIdentifyConnectionProperties;
  shard?: [number, number];
  token: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#identify-identify-connection-properties
 */
export interface GatewayIdentifyConnectionProperties {
  browser: GatewayIdentifyConnectionPropertiesBrowser;
  device: string;
  os: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#identify-identify-connection-properties
 */
export type GatewayIdentifyConnectionPropertiesBrowser = "Discord Android" | "Discord iOS" | string;
