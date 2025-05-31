import type { GatewayActivity } from "../activity.js";
import type { GatewayEventBase } from "../base/event.js";
import type { GatewayOpcodes } from "../event.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence-gateway-presence-update-structure
 */
export interface GatewayPresenceUpdatePayload {
  activities: GatewayPresenceUpdateActivity[];
  afk: boolean;
  since: number | null;
  status: StatusTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence
 */
export type GatewayPresenceUpdate = GatewayEventBase<GatewayOpcodes.PresenceUpdate, GatewayPresenceUpdatePayload>;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence-example-gateway-presence-update
 */
export type GatewayPresenceUpdateActivity = Pick<GatewayActivity, "name" | "state" | "type" | "url">;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence-status-types
 */
export enum StatusTypes {
  DoNotDisturb = "dnd",
  Idle = "idle",
  Invisible = "invisible",
  Offline = "offline",
  Online = "online",
}
