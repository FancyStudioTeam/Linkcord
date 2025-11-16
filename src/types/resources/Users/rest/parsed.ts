import type { ImageDataURI, Snowflake } from "#types/miscellaneous/discord.js";

/**
 * @see https://discord.com/developers/docs/resources/user#create-dm-json-params
 */
export interface CreateUserDMChannelOptions {
	recipientId: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params
 */
export interface GetUserGuildsOptions {
	after?: Snowflake;
	before?: Snowflake;
	limit?: number;
	withCounts?: boolean;
}

/**
 * @see @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export interface EditCurrentUserApplicationRoleConnectionOptions {
	metadata?: Record<string, string>;
	platformName?: string;
	platformUsername?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/user#modify-current-user-json-params
 */
export interface EditCurrentUserOptions {
	avatar?: ImageDataURI | null;
	banner?: ImageDataURI | null;
	username?: string;
}
