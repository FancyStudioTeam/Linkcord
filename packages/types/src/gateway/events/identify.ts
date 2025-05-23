import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";
import type { GatewayPresenceUpdatePayload } from "./presence-update.js";

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
 * @see https://discord.com/developers/docs/events/gateway-events#identify-identify-structure
 */
export interface GatewayIdentifyPayload {
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
export type GatewayIdentifyConnectionPropertiesBrowser = "Discord Android" | "Discord iOS" | string;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#identify
 */
export type GatewayIdentifyEvent = GatewayEventBase<GatewayOpcodes.Identify, GatewayIdentifyPayload>;
