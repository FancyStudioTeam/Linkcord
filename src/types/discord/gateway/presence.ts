import type { APIUser } from "../payloads/Users.js";
import type { Snowflake } from "../shared/discord.js";
import type { GatewayActivity } from "./activity.js";

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#presence-update-presence-update-event-fields
 */
export interface GatewayPresence {
	activities: GatewayActivity[];
	client_status: GatewayPresenceClientStatus;
	guild_id: Snowflake;
	status: StatusTypes;
	user: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#client-status-object
 */
export interface GatewayPresenceClientStatus {
	desktop?: ClientStatusTypes;
	mobile?: ClientStatusTypes;
	web?: ClientStatusTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#update-presence-example-gateway-presence-update
 */
export type GatewayPresenceActivity = Pick<GatewayActivity, "name" | "state" | "type" | "url">;

/**
 * @public
 * @see https://discord.com/developers/docs/events/gateway-events#client-status-object
 */
export enum ClientStatusTypes {
	DoNotDisturb = "dnd",
	Idle = "idle",
	Online = "online",
}

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
