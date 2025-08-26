import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { ActivityLocationKind } from "../enums.js";

/**
 * Represents an activity instance of an application.
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-instance-object
 */
export interface APIActivityInstance {
	/** The ID of the application. */
	application_id: Snowflake;
	/** The ID of the instance. */
	instance_id: string;
	/** The ID of the launch. */
	launch_id: Snowflake;
	/** The location of the activity. */
	location: APIActivityLocation;
	/** The user IDs connected to the activity. */
	users: Snowflake[];
}

/**
 * Represents the location of an activity instance of an application.
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-location-object
 */
export interface APIActivityLocation {
	/** The ID of the channel of the location. */
	channel_id: Snowflake;
	/** The ID of the location. */
	id: string;
	/** The kind of the location. */
	kind: ActivityLocationKind;
	/** The ID of the guild of the location. */
	guild_id?: Snowflake;
}
