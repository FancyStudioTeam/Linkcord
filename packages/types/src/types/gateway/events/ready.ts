import type { APIUnavailableGuild, APIUser } from "#types/payloads";
import type { APIVersion } from "#types/shared";
import type { GatewayApplication } from "../application.js";
import type { GatewayDispatchEventBase } from "../base/event.js";
import type { GatewayDispatchEvents } from "../event.js";

/**
 * Represents the Discord gateway payload for the `READY` event.
 * @see https://discord.com/developers/docs/events/gateway-events#ready
 */
export interface GatewayDispatchReadyEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.Ready, GatewayDispatchReadyEventData> {}

/**
 * Represents the Discord gateway payload data for the `READY` event.
 * @see https://discord.com/developers/docs/events/gateway-events#ready-ready-event-fields
 */
export interface GatewayDispatchReadyEventData {
  /** The partial application. */
  application: GatewayApplication;
  /** The list of unavailable guilds to which the application belongs. */
  guilds: APIUnavailableGuild[];
  /** A gateway url which can be used for resuming connections. */
  resume_gateway_url: string;
  /** The id of the session used to resume the connection. */
  session_id: string;
  /**
   * The list of the shard information.
   * @remarks
   * - This is only present when the `shard` property was included in the `IDENTIFY` payload data.
   * - The first element represents the shard id and the second element represents the number of shards.
   */
  shard?: [number, number];
  /** The current application user. */
  user: APIUser;
  /** The gateway version. */
  v: APIVersion;
}
