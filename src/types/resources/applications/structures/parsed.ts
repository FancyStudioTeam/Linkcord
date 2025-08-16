import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { ActivityLocationKind } from "../enums.js";

/**
 * Represents an activity instance of an application.
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-instance-object
 */
export interface ActivityInstance {
	/** The ID of the application. */
	applicationId: Snowflake;
	/** The ID of the instance. */
	instanceId: string;
	/** The ID of the launch. */
	launchId: Snowflake;
	/** The location of the activity. */
	location: ActivityLocation;
	/** The user IDs connected to the activity. */
	users: Snowflake[];
}

/**
 * Represents the location of an activity instance of an application.
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-location-object
 */
export interface ActivityLocation {
	/** The ID of the channel of the location. */
	channelId: Snowflake;
	/** The ID of the location. */
	id: string;
	/** The kind of the location. */
	kind: ActivityLocationKind;
	/** The ID of the guild of the location. */
	guildId?: Snowflake;
}
