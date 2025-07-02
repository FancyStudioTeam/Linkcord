import type { ISO8601Date, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-structure
 */
export interface APIEntitlement {
	application_id: Snowflake;
	consumed?: boolean;
	deleted: boolean;
	ends_at: ISO8601Date | null;
	guild_id?: Snowflake;
	id: Snowflake;
	sku_id: Snowflake;
	starts_at: ISO8601Date | null;
	type: EntitlementTypes;
	user_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-structure
 */
export type APIPartialEntitlement = Omit<
	APIEntitlement,
	"ends_at" | "starts_at" | "subscription_id"
>;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement
 */
export enum EntitlementOwnerTypes {
	GuildSubscription = 1,
	UserSubscription = 2,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-types
 */
export enum EntitlementTypes {
	ApplicationSubscription = 8,
	DeveloperGift = 3,
	FreePurchase = 5,
	PremiumPurchase = 7,
	PremiumSubscription = 2,
	Purchase = 1,
	TestModePurchase = 4,
	UserGift = 6,
}
