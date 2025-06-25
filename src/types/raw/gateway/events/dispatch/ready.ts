import type { APIUnavailableGuild } from "#types/raw/payloads/Guilds.js";
import type { APIUser } from "#types/raw/payloads/Users.js";
import type { APIVersion } from "#types/raw/shared/discord.js";
import type { GatewayApplication } from "../../application.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#ready-ready-event-fields
 */
export interface GatewayDispatchReadyPayload {
  application: GatewayApplication;
  guilds: APIUnavailableGuild[];
  resume_gateway_url: string;
  session_id: string;
  shard?: [number, number];
  user: APIUser;
  v: APIVersion;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#ready
 */
export type GatewayDispatchReady = GatewayDispatchEventBase<GatewayDispatchEvents.Ready, GatewayDispatchReadyPayload>;
