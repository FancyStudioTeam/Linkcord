import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";
import type { GatewayPresenceUpdatePayload } from "./PresenceUpdate.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#identify-identify-connection-properties
 */
export interface GatewayIdentifyConnectionProperties {
  browser: string;
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
 * @see https://discord.com/developers/docs/events/gateway-events#identify
 */
export type GatewayIdentify = GatewayEventBase<GatewayOpcodes.Identify, GatewayIdentifyPayload>;
