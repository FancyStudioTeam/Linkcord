import type { ISO8601Date, Snowflake } from "#types/miscellaneous/discord.js";
import type { EntitlementType } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-structure
 *
 * @todo Consider modeling `APIEntitlement` as a union of user-granted and guild-granted entitlements.
 */
export interface APIEntitlement {
	application_id: Snowflake;
	consumed?: boolean;
	deleted: boolean;
	expires_at: ISO8601Date | null;
	guild_id?: Snowflake;
	id: Snowflake;
	sku_id: Snowflake;
	starts_at: ISO8601Date | null;
	type: EntitlementType;
	user_id?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement
 */
export type APITestEntitlement = Omit<APIEntitlement, "ends_at" | "starts_at" | "subscription_id">;
