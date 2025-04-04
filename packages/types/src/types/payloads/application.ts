import type { Nullable, Snowflake } from "#types/shared";
import type { APIPartialGuild } from "./guild.js";
import type { OAuth2Scopes } from "./oauth2.js";
import type { APITeam } from "./team.js";
import type { APIUser } from "./user.js";

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface APIApplication {
  application_webhooks_types?: ApplicationEventWebhookTypes[];
  approximate_member_count?: number;
  approximate_user_install_count?: number;
  bot?: APIUser;
  bot_public: boolean;
  bot_require_code_grant: boolean;
  cover_image?: string;
  custom_install_url?: string;
  description: Nullable<string>;
  event_webhooks_status: ApplicationEventWebhookStatus;
  event_webhooks_url?: Nullable<string>;
  flags?: ApplicationFlags;
  guild?: APIPartialGuild;
  guild_id?: Snowflake;
  icon: Nullable<string>;
  id: Snowflake;
  install_params?: APIApplicationInstallParams;
  integration_types_config?: APIApplicationIntegrationTypesConfiguration;
  interactions_endpoint_url?: Nullable<string>;
  name: string;
  owner?: APIUser;
  privacy_policy_url?: string;
  promary_sku_id?: Snowflake;
  redirect_uris: string[];
  role_connections_verification_url?: Nullable<string>;
  rpc_origins?: string[];
  slug?: string;
  tags?: string[];
  team: Nullable<APITeam>;
  terms_of_service_url?: string;
  verify_key: string;
}

/**
 * https://discord.com/developers/docs/resources/application#install-params-object-install-params-structure
 */
export interface APIApplicationInstallParams {
  permissions: string;
  scopes: OAuth2Scopes[];
}

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-integration-type-configuration-object
 */
export interface APIApplicationIntegrationTypeConfiguration {
  oauth2_install_params?: APIApplicationInstallParams;
}

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface APIApplicationIntegrationTypesConfiguration {
  [ApplicationIntegrationTypes.GuildInstall]?: APIApplicationIntegrationTypeConfiguration;
  [ApplicationIntegrationTypes.UserInstall]?: APIApplicationIntegrationTypeConfiguration;
}

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface APIPartialApplication extends Partial<APIApplication> {}

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-event-webhook-status
 */
export enum ApplicationEventWebhookStatus {
  Disabled = 1,
  Enabled = 2,
  DisabledByDiscord = 3,
}

/**
 * https://discord.com/developers/docs/events/webhook-events#event-types
 */
export enum ApplicationEventWebhookTypes {
  ApplicationAuthorized = "APPLICATION_AUTHORIZED",
  EntitlementCreate = "ENTITLEMENT_CREATE",
  QuestUserEnrollment = "QUEST_USER_ENROLLMENT",
}

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-flags
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
 * https://discord.com/developers/docs/resources/application#application-object-application-integration-types
 */
export enum ApplicationIntegrationTypes {
  GuildInstall = 0,
  UserInstall = 1,
}
