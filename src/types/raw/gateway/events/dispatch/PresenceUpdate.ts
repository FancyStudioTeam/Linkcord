import type { APIUser } from "#types/raw/payloads/Users.js";
import type { Snowflake } from "#types/raw/shared/discord.js";
import type { GatewayActivity } from "../../activity.js";
import type { GatewayDispatchEventBase } from "../../base/event.js";
import type { StatusTypes } from "../../presence.js";
import type { GatewayDispatchEvents } from "../Dispatch.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#presence-update-presence-update-event-fields
 */
export interface GatewayDispatchPresenceUpdatePayload {
  activities: GatewayActivity[];
  client_status: GatewayPresenceUpdateClientStatus;
  guild_id: Snowflake;
  status: StatusTypes;
  user: GatewayPresenceUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#client-status-object
 */
export interface GatewayPresenceUpdateClientStatus {
  desktop?: string;
  mobile?: string;
  web?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#presence-update
 */
export interface GatewayPresenceUser extends Omit<Partial<APIUser>, "id"> {
  id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#presence-update
 */
export type GatewayDispatchPresenceUpdate = GatewayDispatchEventBase<
  GatewayDispatchEvents.PresenceUpdate,
  GatewayDispatchPresenceUpdatePayload
>;
