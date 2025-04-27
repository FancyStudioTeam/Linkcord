import type { APIUnavailableGuild, APIUser } from "#payloads";
import type { APIVersion } from "#shared";
import type { GatewayApplication } from "../../application.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../../event.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#ready
 */
export interface GatewayDispatchReadyEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.Ready, GatewayDispatchReadyEventData> {}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#ready-ready-event-fields
 */
export interface GatewayDispatchReadyEventData {
  application: GatewayApplication;
  guilds: APIUnavailableGuild[];
  resume_gateway_url: string;
  session_id: string;
  shard?: [number, number];
  user: APIUser;
  v: APIVersion;
}
