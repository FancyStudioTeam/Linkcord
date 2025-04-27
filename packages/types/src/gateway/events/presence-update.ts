import type { Nullable } from "#shared";
import type { GatewayActivity } from "../activity.js";
import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence
 */
export interface GatewayPresenceUpdateEvent
  extends GatewayEventBase<GatewayOpcodes.PresenceUpdate, GatewayPresenceUpdatePayload> {}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence-gateway-presence-update-structure
 */
export interface GatewayPresenceUpdatePayload {
  activities: GatewayPresenceUpdateActivity[];
  afk: boolean;
  since: Nullable<number>;
  status: StatusTypes;
}

/**
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence-example-gateway-presence-update
 */
export type GatewayPresenceUpdateActivity = Pick<GatewayActivity, "name" | "state" | "type" | "url">;

/**
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence-status-types
 */
export enum StatusTypes {
  DoNotDisturb = "dnd",
  Idle = "idle",
  Invisible = "invisible",
  Offline = "offline",
  Online = "online",
}
