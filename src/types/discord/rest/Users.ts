import type { APIDMChannel, APIGroupDMChannel } from "../payloads/Channels.js";
import type { APIGuildMember, APIUserGuild } from "../payloads/Guilds.js";
import type { APIApplicationRoleConnection, APIConnection, APIUser } from "../payloads/Users.js";
import type { ImageDataUri, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params
 */
export interface RESTGetUserGuildsQueryStringParams {
	after?: Snowflake;
	before?: Snowflake;
	limit?: number;
	with_counts?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#modify-current-user-json-params
 */
export interface RESTPatchUserCurrentJSONParams {
	avatar?: ImageDataUri | null;
	banner?: ImageDataUri | null;
	username?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#create-group-dm-json-params
 */
export interface RESTPostUserChannelDMJSONParams {
	access_tokens: string[];
	nicks: Record<Snowflake, string>;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#create-dm-json-params
 */
export interface RESTPostUserChannelJSONParams {
	recipient_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export interface RESTPutUserApplicationRoleConnectionJSONParams {
	metadata?: Record<string, string>;
	platform_name?: string;
	platform_username?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#leave-guild
 */
export type RESTDeleteUserGuild = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-user
 */
export type RESTGetUser = APIUser;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection
 */
export type RESTGetUserApplicationRoleConnection = APIApplicationRoleConnection;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user-connections
 */
export type RESTGetUserConnections = APIConnection[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user
 */
export type RESTGetUserCurrent = APIUser;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guild-member
 */
export type RESTGetUserGuildMember = APIGuildMember;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds
 */
export type RESTGetUserGuilds = APIUserGuild[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#modify-current-user
 */
export type RESTPatchUserCurrent = APIUser;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#create-dm
 */
export type RESTPostUserChannel = APIDMChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#create-group-dm
 */
export type RESTPostUserChannelDM = APIGroupDMChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection
 */
export type RESTPutUserApplicationRoleConnection = APIApplicationRoleConnection;
