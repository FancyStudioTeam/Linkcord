import type { ImageDataURI, Snowflake } from "#types/miscellaneous/discord.js";
import type { APIApplicationRoleConnection, APIConnection, APIUser, APIUserGuild } from "../structures/raw.js";

/**
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params
 */
export interface RESTGetAPIUserGuildsQueryStringParams {
	after?: Snowflake;
	before?: Snowflake;
	limit?: number;
	with_counts?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/user#modify-current-user-json-params
 */
export interface RESTPatchAPICurrentUserJSONParams {
	avatar?: ImageDataURI | null;
	banner?: ImageDataURI | null;
	username?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/user#create-group-dm-json-params
 */
export interface RESTPostAPIUserChannelGroupJSONParams {
	access_tokens: string[];
	nicks: Record<Snowflake, string>;
}

/**
 * @see https://discord.com/developers/docs/resources/user#create-dm-json-params
 */
export interface RESTPostAPIUserChannelJSONParams {
	recipient_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export interface RESTPutAPIUserApplicationRoleConnectionJSONParams {
	metadata?: Record<string, string>;
	platform_name?: string;
	platform_username?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/user#leave-guild
 */
export type RESTDeleteAPIUserGuild = undefined;

/**
 * @see https://discord.com/developers/docs/resources/user#get-current-user
 */
export type RESTGetAPICurrentUser = APIUser;

/**
 * @see https://discord.com/developers/docs/resources/user#get-user
 */
export type RESTGetAPIUser = APIUser;

/**
 * @see https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection
 */
export type RESTGetAPIUserApplicationRoleConnection = APIApplicationRoleConnection;

/**
 * @see https://discord.com/developers/docs/resources/user#get-current-user-connections
 */
export type RESTGetAPIUserConnections = APIConnection[];

/**
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guild-member
 */
export type RESTGetAPIUserGuildMember = APIGuildMember;

/**
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds
 */
export type RESTGetAPIUserGuilds = APIUserGuild[];

/**
 * @see https://discord.com/developers/docs/resources/user#modify-current-user
 */
export type RESTPatchAPICurrentUser = APIUser;

/**
 * @see https://discord.com/developers/docs/resources/user#create-dm
 */
export type RESTPostAPIUserChannel = APIDMChannel;

/**
 * @see https://discord.com/developers/docs/resources/user#create-group-dm
 */
export type RESTPostAPIUserChannelGroup = APIGroupDMChannel;

/**
 * @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export type RESTPutAPIUserApplicationRoleConnection = APIApplicationRoleConnection;
