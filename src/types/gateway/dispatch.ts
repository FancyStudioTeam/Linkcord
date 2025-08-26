import type { APIVersion } from "#types/miscellaneous/discord.js";
import type {
	APIGatewayApplication,
	APIUnavailableGuild,
	APIUser,
} from "#types/resources/index.js";
import type { GatewayDispatchEvents } from "./enums.js";
import type { GatewayEventDispatchBase } from "./events.js";

/**
 * Represents the {@link GatewayDispatchEvents.Ready | `READY`} event payload from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#ready-ready-event-fields
 */
export interface GatewayDispatchReadyEventPayload {
	/** The application information of the gateway. */
	application: APIGatewayApplication;
	/** The guilds of the connected user. */
	guilds: APIUnavailableGuild[];
	/** The URL to use when resuming the session. */
	resume_gateway_url: string;
	/** The ID of the session of the gateway. */
	session_id: string;
	/** The shard information of the gateway. */
	shard: [number, number];
	/** The connected user to the gateway. */
	user: APIUser;
	/** The version of the Discord gateway. */
	v: APIVersion;
}

/**
 * Represents the {@link GatewayDispatchEvents.Ready | `READY`} event from the Discord gateway.
 * @see https://discord.com/developers/docs/events/gateway-events#ready
 */
export type GatewayDispatchReadyEvent = GatewayEventDispatchBase<
	GatewayDispatchEvents.Ready,
	GatewayDispatchReadyEventPayload
>;
