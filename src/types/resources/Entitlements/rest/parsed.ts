import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { EntitlementOwnerType } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement-json-params
 */
export interface CreateTestEntitlementOptions {
	skuId: Snowflake;
	ownerId: Snowflake;
	ownerType: EntitlementOwnerType;
}

/**
 * @see https://discord.com/developers/docs/resources/entitlement#list-entitlements-query-string-params
 */
export interface GetEntitlementsOptions {
	after?: Snowflake;
	before?: Snowflake;
	excludeDeleted?: boolean;
	excludeEnded?: boolean;
	limit?: number;
	guildId?: Snowflake;
	skuIds?: Snowflake[];
	userId?: Snowflake;
}
