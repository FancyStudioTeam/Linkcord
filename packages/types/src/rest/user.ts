import type { APIDMChannel } from "../payloads/channel.js";
import type { APIGroupDMChannel } from "../payloads/channel.js";
import type { APICurrentUserGuild } from "../payloads/guild.js";
import type { APIGuildMember } from "../payloads/guild.js";
import type { APIApplicationRoleConnection, APIConnection, APIUser } from "../payloads/user.js";
import type { ImageDataUri, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#create-dm-json-params
 */
export interface RESTCreateDMJSONParams {
  recipient_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#create-group-dm-json-params
 */
export interface RESTCreateGroupDMJSONParams {
  access_tokens: string[];
  nicks: Record<Snowflake, string>;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params
 */
export interface RESTGetCurrentUserGuildsStringParams {
  after?: Snowflake;
  before?: Snowflake;
  limit?: number;
  with_counts?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#modify-current-user-json-params
 */
export interface RESTModifyCurrentUserJSONParams {
  avatar?: ImageDataUri | null;
  banner?: ImageDataUri | null;
  username?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export interface RESTUpdateCurrentUserApplicationRoleConnectionJSONParams {
  metadata?: Record<string, string>;
  platform_name?: string;
  platform_username?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#create-dm
 */
export type RESTCreateDM = APIDMChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#create-group-dm
 */
export type RESTCreateGroupDM = APIGroupDMChannel;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user
 */
export type RESTGetCurrentUser = APIUser;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection
 */
export type RESTGetCurrentUserApplicationRoleConnection = APIApplicationRoleConnection;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user-connections
 */
export type RESTGetCurrentUserConnections = APIConnection[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guild-member
 */
export type RESTGetCurrentUserGuildMember = APIGuildMember;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds
 */
export type RESTGetCurrentUserGuilds = APICurrentUserGuild[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#get-user
 */
export type RESTGetUser = APIUser;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#leave-guild
 */
export type RESTLeaveGuild = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#modify-current-user
 */
export type RESTModifyCurrentUser = APIUser;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection
 */
export type RESTUpdateCurrentUserApplicationRoleConnection = APIApplicationRoleConnection;
