import type { ImageDataURI, Snowflake } from '#types/miscellaneous/discord.js';

/**
 * @see https://discord.com/developers/docs/resources/user#create-dm-json-params
 */
export interface RawCreateUserDirectMessageChannelOptions {
	recipient_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export interface RawEditCurrentUserApplicationRoleConnectionOptions {
	metadata?: Record<string, string>;
	platform_name?: string;
	platform_username?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/user#modify-current-user-json-params
 */
export interface RawEditCurrentUserOptions {
	avatar?: ImageDataURI | null;
	banner?: ImageDataURI | null;
	username?: string;
}
