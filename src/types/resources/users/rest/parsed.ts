import type { ImageDataURI, Snowflake } from "#types/miscellaneous/discord.js";

/**
 * The options to use when creating a user DM channel.
 * @see https://discord.com/developers/docs/resources/user#create-dm-json-params
 */
export interface CreateUserDMChannelOptions {
	/** The ID of the recipient of the DM. */
	recipientId: Snowflake;
}

/**
 * The options to use when getting the user guilds.
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params
 */
export interface GetUserGuildsOptions {
	/** The guilds to fetch after the given guild ID. */
	after?: Snowflake;
	/** The guilds to fetch before the given guild ID. */
	before?: Snowflake;
	/** The maximum number of guilds to fetch. */
	limit?: number;
	/** Whether to include the approximate member count and approximate presence count. */
	withCounts?: boolean;
}

/**
 * The options to use when editing the user application role connection.
 * @see @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export interface EditUserApplicationRoleConnectionOptions {
	/** The metadata of the platform. */
	metadata?: Record<string, string>;
	/** The name of the platform. */
	platformName?: string;
	/** The username of the platform. */
	platformUsername?: string;
}

/**
 * The options to use when editing the user.
 * @see https://discord.com/developers/docs/resources/user#modify-current-user-json-params
 */
export interface EditUserOptions {
	/** The avatar of the user. */
	avatar?: ImageDataURI | null;
	/** The banner of the user. */
	banner?: ImageDataURI | null;
	/** The username of the user. */
	username?: string;
}
