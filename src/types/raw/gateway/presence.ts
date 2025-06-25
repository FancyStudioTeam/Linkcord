import type { GatewayActivity } from "./activity.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence-gateway-presence-update-structure
 */
export interface GatewayPresence {
  activities: GatewayPresenceActivity[];
  afk: boolean;
  since: number | null;
  status: StatusTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence-example-gateway-presence-update
 */
export type GatewayPresenceActivity = Pick<GatewayActivity, "name" | "state" | "type" | "url">;

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
