import type { ImageDataURI, Snowflake } from "#types/miscellaneous/discord.js";
import type { APIApplicationRoleConnection, APIUser, APIUserGuild } from "../structures/raw.js";

/**
 * Represents the query string parameters of the {@link RESTGetAPIUserGuilds | `GET /users/@me/guilds`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params
 */
export interface RESTGetAPIUserGuildsQueryStringParams {
	/** The guilds to fetch after the given guild ID. */
	after?: Snowflake;
	/** The guilds to fetch before the given guild ID. */
	before?: Snowflake;
	/** The maximum number of guilds to fetch. */
	limit?: number;
	/** Whether to include the approximate member count and approximate presence count. */
	with_counts?: boolean;
}

/**
 * Represents the JSON parameters of the {@link RESTPatchAPIUserCurrent | `PATCH /users/@me`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#modify-current-user-json-params
 */
export interface RESTPatchAPIUserCurrentJSONParams {
	/** The avatar of the user. */
	avatar?: ImageDataURI | null;
	/** The banner of the user. */
	banner?: ImageDataURI | null;
	/** The username of the user. */
	username?: string;
}

/**
 * Represents the JSON parameters of the {@link RESTPostAPIUserChannelGroup | `POST /users/@me/channels`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#create-group-dm-json-params
 */
export interface RESTPostAPIUserChannelGroupJSONParams {
	/** The access tokens of the user to create a group DM. */
	access_tokens: string[];
	/** The map of user IDs with their respective nicknames. */
	nicks: Record<Snowflake, string>;
}

/**
 * Represents the JSON parameters of the {@link RESTPostAPIUserChannel | `POST /users/@me/channels`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#create-dm-json-params
 */
export interface RESTPostAPIUserChannelJSONParams {
	/** The ID of the recipient of the DM. */
	recipient_id: Snowflake;
}

/**
 * Represents the JSON parameters of the {@link RESTPutAPIUserApplicationRoleConnection | `PUT /users/@me/applications/(application.id)/role-connections`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export interface RESTPutAPIUserApplicationRoleConnectionJSONParams {
	/** The metadata of the platform. */
	metadata?: Record<string, string>;
	/** The name of the platform. */
	platform_name?: string;
	/** The username of the platform. */
	platform_username?: string;
}

/**
 * Represents the response of the {@link RESTDeleteAPIUserGuild | `DELETE /users/@me/guilds/(guild.id)`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#leave-guild
 */
export type RESTDeleteAPIUserGuild = undefined;

/**
 * Represents the response of the {@link RESTGetAPIUser | `GET /users/(user.id)`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#get-user
 */
export type RESTGetAPIUser = APIUser;

/**
 * Represents the response of the {@link RESTGetAPIUserCurrent | `GET /users/@me`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#get-current-user
 */
export type RESTGetAPIUserCurrent = APIUser;

/**
 * Represents the response of the {@link RESTGetAPIUserGuildMember | `GET /guilds/(guild.id)/member`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guild-member
 */
// TODO: Add "APIGuildMember" to "RESTGetAPIUserGuildMember".
// export type RESTGetAPIUserGuildMember = APIGuildMember;

/**
 * Represents the response of the {@link RESTGetAPIUserGuilds | `GET /users/@me/guilds`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds
 */
export type RESTGetAPIUserGuilds = APIUserGuild[];

/**
 * Represents the response of the {@link RESTPatchAPIUserCurrent | `PATCH /users/@me`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#modify-current-user
 */
export type RESTPatchAPIUserCurrent = APIUser;

/**
 * Represents the response of the {@link RESTPostAPIUserChannel | `POST /users/@me/channels`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#create-dm
 */
// TODO: Add "APIDMChannel" to "RESTPostAPIUserChannel".
// export type RESTPostAPIUserChannel = APIDMChannel;

/**
 * Represents the response of the {@link RESTPostAPIUserChannelGroup | `POST /users/@me/channels`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#create-group-dm
 */
// TODO: Add "APIGroupDMChannel" to "RESTPostAPIUserChannelGroup".
// export type RESTPostAPIUserChannelGroup = APIGroupDMChannel;

/**
 * Represents the response of the {@link RESTPutAPIUserApplicationRoleConnection | `PUT /users/@me/applications/(application.id)/role-connections`} endpoint.
 * @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export type RESTPutAPIUserApplicationRoleConnection = APIApplicationRoleConnection;
