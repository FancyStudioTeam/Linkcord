import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { ApplicationFlags } from "../enums.js";

/**
 * Represents a Discord gateway application object.
 * @see https://discord.com/developers/docs/events/gateway-events#ready-ready-event-fields
 */
export interface APIGatewayApplication {
	/** The flags of the application. */
	flags: ApplicationFlags;
	/** The ID of the application. */
	id: Snowflake;
}
