import type { APIEntitlement, APIPartialEntitlement, EntitlementOwnerTypes } from "../payloads/entitlement.js";
import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#list-entitlements-query-string-params
 */
export interface RESTGetApplicationEntitlementsQueryParams {
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
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement-json-params
 */
export interface RESTPostApplicationEntitlementTestJSONParams {
  owner_id: Snowflake;
  owner_type: EntitlementOwnerTypes;
  sku_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#delete-test-entitlement
 */
export type RESTDeleteApplicationEntitlementTest = undefined;

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
 * @see https://discord.com/developers/docs/resources/entitlement#get-entitlement
 */
export type RESTGetApplicationEntitlement = APIEntitlement;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#list-entitlements
 */
export type RESTGetApplicationEntitlements = APIEntitlement[];
