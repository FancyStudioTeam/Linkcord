import type { APIApplicationRoleConnection, APIConnection, APIUser, Nullable, Snowflake } from "#types";

/**
 * ===================================================================================
 * = JSON Params - Represent the params to use when sending any request with a body. =
 * ===================================================================================
 */

/**
 * https://discord.com/developers/docs/resources/user#create-dm-json-params
 */
export interface RESTCreateDMJSONParams {
  recipient_id: Snowflake[];
}

/**
 * https://discord.com/developers/docs/resources/user#create-group-dm-json-params
 */
export interface RESTCreateGroupDMJSONParams {
  access_tokens: string[];
  nicks: string[];
}

/**
 * https://discord.com/developers/docs/resources/user#modify-current-user-json-params
 */
export interface RESTModifyCurrentUserJSONParams {
  avatar?: Nullable<string>;
  banner?: Nullable<string>;
  username?: string;
}

/**
 * https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export interface RESTUpdateCurrentUserApplicationRoleConnectionJSONParams {
  metadata: object;
  platform_name?: string;
  platform_username?: string;
}

/**
 * =================================================================================================
 * = Query Params - Represent the params to use when sending any request with query string params. =
 * =================================================================================================
 */

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params
 */
export interface RESTGetCurrentUserGuildsQueryStringParams {
  before: Snowflake;
  after: Snowflake;
  limit: number;
  with_counts: boolean;
}

/**
 * ==========================================================
 * = Result - Represent the returned data from the request. =
 * ==========================================================
 */

/**
 * https://discord.com/developers/docs/resources/user#create-dm
 */
// TODO: Add "APIDMChannel" type.
// @ts-expect-error
export type RESTCreateDMResult = APIDMChannel;

/**
 * https://discord.com/developers/docs/resources/user#create-group-dm
 */
// TODO: Add "APIDMChannel" type.
// @ts-expect-error
export type RESTCreateGroupDMResult = APIDMChannel;

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection
 */
export type RESTGetCurrentUserApplicationRoleConnectionResult = APIApplicationRoleConnection;

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-connections
 */
export type RESTGetCurrentUserConnectionsResult = APIConnection[];

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-guild-member
 */
// TODO: Add "APIGuildMember" type.
// @ts-expect-error
export type RESTGetCurrentUserGuildMemberResult = APIGuildMember;

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-guilds
 */
// TODO: Add "APIGuild" or "APIPartialGuild" type.
// @ts-expect-error
export type RESTGetCurrentUserGuildsResult = APIGuild[];

/**
 * https://discord.com/developers/docs/resources/user#get-current-user
 */
export type RESTGetCurrentUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#get-user
 */
export type RESTGetUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#leave-guild
 */
export type RESTLeaveGuildResult = undefined;

/**
 * https://discord.com/developers/docs/resources/user#modify-current-user
 */
export type RESTModifyCurrentUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection
 */
export type RESTUpdateCurrentUserApplicationRoleConnectionResult = APIApplicationRoleConnection;
