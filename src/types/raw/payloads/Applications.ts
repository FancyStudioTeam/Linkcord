import type { Snowflake } from "../shared/discord.js";
import type { APIPartialGuild } from "./guild.js";
import type { OAuth2Scopes } from "./OAuth2.js";
import type { APITeam } from "./Teams.js";
import type { APIUser } from "./Users.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-instance-object
 */
export interface APIActivityInstance {
  application_id: Snowflake;
  instance_id: string;
  launch_id: Snowflake;
  location: APIActivityLocation;
  users: Snowflake[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-location-object
 */
export interface APIActivityLocation {
  channel_id: Snowflake;
  guild_id?: Snowflake | null;
  id: string;
  kind: ActivityLocationKind;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface APIApplication {
  approximate_guild_count?: number;
  approximate_user_authorization_count?: number;
  approximate_user_install_count?: number;
  bot?: APIUser;
  bot_public: boolean;
  bot_require_code_grant: boolean;
  cover_image?: string;
  custom_install_url?: string;
  description: string | null;
  event_webhooks_status: ApplicationEventWebhookStatus;
  event_webhooks_types?: ApplicationEventWebhookTypes[];
  event_webhooks_url?: string | null;
  flags?: ApplicationFlags;
  guild?: APIPartialGuild;
  guild_id?: Snowflake;
  icon: string | null;
  id: Snowflake;
  install_params?: APIApplicationInstallParams;
  integration_types_config?: APIApplicationIntegrationTypesConfiguration;
  interactions_endpoint_url?: string | null;
  name: string;
  owner?: APIUser;
  primary_sku_id?: Snowflake;
  privacy_policy_url?: string;
  redirect_uris: string[];
  role_connections_verification_url?: string | null;
  rpc_origins?: string[];
  slug?: string;
  tags?: string[];
  team: APITeam | null;
  terms_of_service_url?: string;
  verify_key: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#install-params-object-install-params-structure
 */
export interface APIApplicationInstallParams {
  permissions: string;
  scopes: OAuth2Scopes[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#application-object-application-integration-type-configuration-object
 */
export interface APIApplicationIntegrationTypeConfiguration {
  oauth2_install_params?: APIApplicationInstallParams;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface APIApplicationIntegrationTypesConfiguration {
  [ApplicationIntegrationTypes.GuildInstall]?: APIApplicationIntegrationTypeConfiguration;
  [ApplicationIntegrationTypes.UserInstall]?: APIApplicationIntegrationTypeConfiguration;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export type APIPartialApplication = Pick<
  APIApplication,
  | "bot"
  | "bot_public"
  | "bot_require_code_grant"
  | "cover_image"
  | "custom_install_url"
  | "description"
  | "flags"
  | "guild"
  | "guild_id"
  | "icon"
  | "id"
  | "install_params"
  | "integration_types_config"
  | "name"
  | "primary_sku_id"
  | "privacy_policy_url"
  | "rpc_origins"
  | "slug"
  | "tags"
  | "team"
  | "terms_of_service_url"
  | "verify_key"
>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance-activity-location-kind-enum
 */
export enum ActivityLocationKind {
  GuildChannel = "gc",
  PrivateChannel = "pc",
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#application-object-application-event-webhook-status
 */
export enum ApplicationEventWebhookStatus {
  Disabled = 1,
  DisabledByDiscord = 3,
  Enabled = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/events/webhook-events#event-types
 */
export enum ApplicationEventWebhookTypes {
  ApplicationAuthorized = "APPLICATION_AUTHORIZED",
  ApplicationDeauthorized = "APPLICATION_DEAUTHORIZED",
  EntitlementCreate = "ENTITLEMENT_CREATE",
  QuestUserEnrollment = "QUEST_USER_ENROLLMENT",
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#application-object-application-flags
 */
export enum ApplicationFlags {
  ApplicationAutoModerationRuleCreateBadge = 1 << 6,
  ApplicationCommandBadge = 1 << 23,
  Embbeded = 1 << 17,
  GatewayGuildMembers = 1 << 14,
  GatewayGuildMembersLimited = 1 << 15,
  GatewayMessageContent = 1 << 18,
  GatewayMessageContentLimited = 1 << 19,
  GatewayPresence = 1 << 12,
  GatewayPresenceLimited = 1 << 13,
  VerificationPendingGuildLimit = 1 << 16,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#application-object-application-integration-types
 */
export enum ApplicationIntegrationTypes {
  GuildInstall = 0,
  UserInstall = 1,
}
