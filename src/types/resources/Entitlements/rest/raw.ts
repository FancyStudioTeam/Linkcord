import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { EntitlementOwnerType } from '../enums.js';
import type { APIEntitlement, APITestEntitlement } from '../structures/raw.js';

/**
 * @see https://discord.com/developers/docs/resources/entitlement#list-entitlements-query-string-params
 */
export interface RESTGetAPIEntitlementsQueryStringParams {
	after?: Snowflake;
	before?: Snowflake;
	exclude_deleted?: boolean;
	exclude_ended?: boolean;
	limit?: number;
	guild_id?: Snowflake;
	sku_ids?: string;
	user_id?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement-json-params
 */
export interface RESTPostAPITestEntitlementJSONParams {
	sku_id: Snowflake;
	owner_id: Snowflake;
	owner_type: EntitlementOwnerType;
}

/**
 * @see https://discord.com/developers/docs/resources/entitlement#delete-test-entitlement
 */
export type RESTDeleteAPITestEntitlement = undefined;

/**
 * @see https://discord.com/developers/docs/resources/entitlement#get-entitlement
 */
export type RESTGetAPIEntitlement = APIEntitlement;

/**
 * @see https://discord.com/developers/docs/resources/entitlement#list-entitlements
 */
export type RESTGetAPIEntitlements = APIEntitlement[];

/**
 * @see https://discord.com/developers/docs/resources/entitlement#consume-an-entitlement
 */
export type RESTPostAPIEntitlement = undefined;

/**
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement
 */
export type RESTPostAPITestEntitlement = APITestEntitlement;
