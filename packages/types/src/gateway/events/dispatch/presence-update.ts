import type { APIUser } from "#payloads";
import type { Snowflake } from "#shared";
import type { GatewayActivity } from "../../activity.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { GatewayDispatchEvents } from "../../event.js";
import type { StatusTypes } from "../presence-update.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#presence-update
 */
export interface GatewayDispatchPresenceUpdateEvent
  extends GatewayDispatchEventBase<GatewayDispatchEvents.PresenceUpdate, GatewayDispatchPresenceUpdateEventData> {}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#presence-update-presence-update-event-fields
 */
export interface GatewayDispatchPresenceUpdateEventData {
  activities: GatewayActivity[];
  client_status: GatewayPresenceUpdateClientStatus;
  guild_id: Snowflake;
  status: StatusTypes;
  user: GatewayPresenceUser;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#client-status-object
 */
export interface GatewayPresenceUpdateClientStatus {
  desktop?: string;
  mobile?: string;
  web?: string;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#presence-update
 */
export type GatewayPresenceUser = Omit<Partial<APIUser>, "id"> & {
  id: Snowflake;
};
