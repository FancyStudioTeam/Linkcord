import type { ImageDataURI, Snowflake } from '#types/miscellaneous/discord.js';
import type { APIDMChannel } from '#types/resources/Channels/index.js';
import type { APIApplicationRoleConnection, APIConnection, APIUser } from '../structures/raw.js';

/**
 * @see https://discord.com/developers/docs/resources/user#modify-current-user-json-params
 */
export interface RESTPatchAPICurrentUserJSONParams {
	avatar?: ImageDataURI | null;
	banner?: ImageDataURI | null;
	username?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/user#create-dm-json-params
 */
export interface RESTPostAPIUserDMChannelJSONParams {
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
 * @see https://discord.com/developers/docs/resources/user#modify-current-user
 */
export type RESTPatchAPICurrentUser = APIUser;

/**
 * @see https://discord.com/developers/docs/resources/user#create-dm
 */
export type RESTPostAPIUserDMChannel = APIDMChannel;

/**
 * @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export type RESTPutAPIUserApplicationRoleConnection = APIApplicationRoleConnection;
