import type { Nullable, Snowflake } from "#types/shared";
import type { APIPartialGuild } from "./guild.js";
import type { OAuth2Scopes } from "./oauth2.js";
import type { APITeam } from "./team.js";
import type { APIUser } from "./user.js";

/**
 * Represents the application structure from Discord.
 * @see https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface APIApplication {
  /** The approximate number of guilds at which the application was added. */
  approximate_guild_count?: number;
  /** The approximate number of users at which the application was installed. */
  approximate_user_install_count?: number;
  /** The user associated with the application. */
  bot?: APIUser;
  /** Whether the application can be added by anyone. */
  bot_public: boolean;
  /** Whether the application will only join when the full OAuth2 flow is completed. */
  bot_require_code_grant: boolean;
  /** The default application rich presence invite cover image hash. */
  cover_image?: string;
  /** The default custom install url of the application. */
  custom_install_url?: string;
  /** The description of the application. */
  description: Nullable<string>;
  /** The status of the event webhooks of the application. */
  event_webhooks_status: ApplicationEventWebhookStatus;
  /** The list of event webhook types of the application. */
  event_webhooks_types?: ApplicationEventWebhookTypes[];
  /** The url of the event webhooks to receive the webhook events. */
  event_webhooks_url?: Nullable<string>;
  /** The flags of the application. */
  flags?: ApplicationFlags;
  /** The guild associated with the application. */
  guild?: APIPartialGuild;
  /** The id of the guild associated with the application. */
  guild_id?: Snowflake;
  /** The icon hash of the application. */
  icon: Nullable<string>;
  /** The id of the application. */
  id: Snowflake;
  /** The default install params settings in-app authorization link. */
  install_params?: APIApplicationInstallParams;
  /** The default scopes and permissions for each installation context. */
  integration_types_config?: APIApplicationIntegrationTypesConfiguration;
  /** The interactions endpoint url of the application. */
  interactions_endpoint_url?: Nullable<string>;
  /** The name of the application. */
  name: string;
  /** The owner of the application. */
  owner?: APIUser;
  /** The url of the privacy policy of the application. */
  privacy_policy_url?: string;
  /** The id of the game SKU if the application is a game sold on Discord. */
  primary_sku_id?: Snowflake;
  /** The list of redirect uris of the application. */
  redirect_uris: string[];
  /** The role connection verification url of the application. */
  role_connections_verification_url?: Nullable<string>;
  /** The list of RPC origin urls of the application when RPC is enabled. */
  rpc_origins?: string[];
  /** The slug at which links to the store page of the game. */
  slug?: string;
  /** The list of tags of the application. */
  tags?: string[];
  /** The team at which the application belongs. */
  team: Nullable<APITeam>;
  /** The url of the terms of service of the application. */
  terms_of_service_url?: string;
  /** The encoded hexadecimal key to verify interactions. */
  verify_key: string;
}

/**
 * Represents the application install params structure from Discord.
 * @see https://discord.com/developers/docs/resources/application#install-params-object-install-params-structure
 */
export interface APIApplicationInstallParams {
  /** The requested permissions for the application role. */
  permissions: string;
  /** The list of scopes to be installed. */
  scopes: OAuth2Scopes[];
}

/**
 * Represents the application integration type configuration structure from Discord.
 * @see https://discord.com/developers/docs/resources/application#application-object-application-integration-type-configuration-object
 */
export interface APIApplicationIntegrationTypeConfiguration {
  /** The install params of the integration. */
  oauth2_install_params?: APIApplicationInstallParams;
}

/**
 * Represents the application integration types configuration structure from Discord.
 * @see https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface APIApplicationIntegrationTypesConfiguration {
  /** The guild integration type configuration. */
  [ApplicationIntegrationTypes.GuildInstall]?: APIApplicationIntegrationTypeConfiguration;
  /** The user integration type configuration. */
  [ApplicationIntegrationTypes.UserInstall]?: APIApplicationIntegrationTypeConfiguration;
}

/**
 * Represents the partial application structure from Discord.
 * @remarks
 * - Not documented by Discord.
 * - Partial structures may not be correctly implemented here due lack of documentation.
 */
export interface APIPartialApplication extends Partial<APIApplication> {}

/**
 * The available application event webhook statuses.
 * @see https://discord.com/developers/docs/resources/application#application-object-application-event-webhook-status
 */
export enum ApplicationEventWebhookStatus {
  Disabled = 1,
  DisabledByDiscord = 3,
  Enabled = 2,
}

/**
 * The available application event webhook types.
 * @see https://discord.com/developers/docs/events/webhook-events#event-types
 */
export enum ApplicationEventWebhookTypes {
  ApplicationAuthorized = "APPLICATION_AUTHORIZED",
  EntitlementCreate = "ENTITLEMENT_CREATE",
  QuestUserEnrollment = "QUEST_USER_ENROLLMENT",
}

/**
 * The available application flags.
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
 * The available application integration types.
 * @see https://discord.com/developers/docs/resources/application#application-object-application-integration-types
 */
export enum ApplicationIntegrationTypes {
  GuildInstall = 0,
  UserInstall = 1,
}
