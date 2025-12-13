import type { ISO8601Date, Snowflake } from "#types/miscellaneous/discord.js";
import type { EntitlementType } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-structure
 */
export interface APIEntitlementBase {
	application_id: Snowflake;
	consumed?: boolean;
	deleted: boolean;
	ends_at: ISO8601Date | null;
	id: Snowflake;
	sku_id: Snowflake;
	starts_at: ISO8601Date | null;
	type: EntitlementType;
}

/**
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-structure
 */
export interface APIGuildEntitlement extends APIEntitlementBase {
	guild_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-structure
 */
export interface APIUserEntitlement extends APIEntitlementBase {
	user_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-structure
 */
export type APIEntitlement = APIGuildEntitlement | APIUserEntitlement;

/**
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement
 */
export type APITestEntitlement = Omit<APIEntitlement, "ends_at" | "starts_at" | "subscription_id">;
