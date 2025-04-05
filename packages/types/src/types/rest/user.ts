import type {
  APIApplicationRoleConnection,
  APIConnection,
  APICurrentUserGuild,
  APIGuildMember,
  APIUser,
} from "#types/payloads";
import type { ImageData, Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/user#create-dm-json-params
 */
export interface RESTCreateDMJSONParams {
  recipient_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/user#create-group-dm-json-params
 */
export interface RESTCreateGroupDMJSONParams {
  access_tokens: string[];
  nicks?: Record<Snowflake, string>;
}

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params
 */
export interface RESTGetCurrentUserGuildsQueryParams {
  before?: Snowflake;
  after?: Snowflake;
  limit?: number;
  with_counts?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/user#modify-current-user-json-params
 */
export interface RESTModifyCurrentUserJSONParams {
  avatar?: Nullable<ImageData>;
  banner?: Nullable<ImageData>;
  username?: string;
}

/**
 * https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params
 */
export interface RESTUpdateCurrentUserApplicationRoleConnectionJSONParams {
  metadata?: Record<string, string | number>;
  platform_name?: string;
  platform_username?: string;
}

/**
 * https://discord.com/developers/docs/resources/user#create-dm
 */
// TODO: Add "APIDMChannel" interface.
export type RESTCreateDM = unknown;

/**
 * https://discord.com/developers/docs/resources/user#create-group-dm
 */
// TODO: Add "APIDMChannel" interface.
export type RESTCreateGroupDM = unknown;

/**
 * https://discord.com/developers/docs/resources/user#get-current-user
 */
export type RESTGetCurrentUser = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection
 */
export type RESTGetCurrentUserApplicationRoleConnection = APIApplicationRoleConnection;

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-connections
 */
export type RESTGetCurrentUserConnections = APIConnection[];

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-guild-member
 */
export type RESTGetCurrentUserGuildMember = APIGuildMember;

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-guilds
 */
export type RESTGetCurrentUserGuilds = APICurrentUserGuild[];

/**
 * https://discord.com/developers/docs/resources/user#get-user
 */
export type RESTGetUser = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#leave-guild
 */
export type RESTLeaveGuild = undefined;

/**
 * https://discord.com/developers/docs/resources/user#modify-current-user
 */
export type RESTModifyCurrentUser = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection
 */
export type RESTUpdateCurrentUserApplicationRoleConnection = APIApplicationRoleConnection;
