import type { APIApplicationRoleConnectionMetadata } from "../payloads/ApplicationRoleConnectionMetadata.js";
import type {
  APIActivityInstance,
  APIApplication,
  APIApplicationInstallParams,
  APIApplicationIntegrationTypesConfiguration,
  ApplicationEventWebhookStatus,
  ApplicationEventWebhookTypes,
} from "../payloads/Applications.js";
import type { APIEmoji } from "../payloads/Emojis.js";
import type { APIEntitlement, APIPartialEntitlement, EntitlementOwnerTypes } from "../payloads/Entitlements.js";
import type { APISKU } from "../payloads/SKUs.js";
import type { ImageDataUri, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#list-application-emojis
 */
export interface RESTGetApplicationEmojis {
  items: APIEmoji[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#list-entitlements-query-string-params
 */
export interface RESTGetApplicationEntitlementsQueryStringParams {
  after?: Snowflake;
  before?: Snowflake;
  exclude_deleted?: boolean;
  exclude_ended?: boolean;
  guild_id?: Snowflake;
  limit?: number;
  sku_ids?: string;
  user_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#edit-current-application-json-params
 */
export interface RESTPatchApplicationCurrentJSONParams {
  cover_image?: ImageDataUri | null;
  custom_install_url?: string;
  description?: string;
  event_webhooks_status?: ApplicationEventWebhookStatus;
  event_webhooks_types?: ApplicationEventWebhookTypes[];
  event_webhooks_url?: string;
  flags?: number;
  icon?: ImageDataUri | null;
  install_params?: APIApplicationInstallParams;
  integration_types_config?: APIApplicationIntegrationTypesConfiguration;
  interactions_endpoint_url?: string;
  role_connections_verification_url?: string;
  tags?: string[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#modify-application-emoji-json-params
 */
export interface RESTPatchApplicationEmojiJSONParams {
  name: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#create-application-emoji-json-params
 */
export interface RESTPostApplicationEmojiJSONParams {
  image: ImageDataUri;
  name: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement-json-params
 */
export interface RESTPostApplicationEntitlementTestJSONParams {
  owner_id: Snowflake;
  owner_type: EntitlementOwnerTypes;
  sku_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#delete-application-emoji
 */
export type RESTDeleteApplicationEmoji = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#delete-test-entitlement
 */
export type RESTDeleteApplicationEntitlementTest = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#get-application-activity-instance
 */
export type RESTGetApplicationActivityInstance = APIActivityInstance;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#get-current-application
 */
export type RESTGetApplicationCurrent = APIApplication;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#get-application-emoji
 */
export type RESTGetApplicationEmoji = APIEmoji;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#get-entitlement
 */
export type RESTGetApplicationEntitlement = APIEntitlement;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#list-entitlements
 */
export type RESTGetApplicationEntitlements = APIEntitlement[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application-role-connection-metadata#get-application-role-connection-metadata-records
 */
export type RESTGetApplicationRoleConnectionMetadata = APIApplicationRoleConnectionMetadata[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sku#list-skus
 */
export type RESTGetApplicationSKUs = APISKU[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application#edit-current-application
 */
export type RESTPatchApplicationCurrent = APIApplication;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#modify-application-emoji
 */
export type RESTPatchApplicationEmoji = APIEmoji;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#create-application-emoji
 */
export type RESTPostApplicationEmoji = APIEmoji;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#consume-an-entitlement
 */
export type RESTPostApplicationEntitlementConsume = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement
 */
export type RESTPostApplicationEntitlementTest = APIPartialEntitlement;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/application-role-connection-metadata#update-application-role-connection-metadata-records
 */
export type RESTPutApplicationRoleConnectionMetadata = APIApplicationRoleConnectionMetadata[];
