/**
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement-json-params
 */
export enum EntitlementOwnerType {
	GuildSubscription = 1,
	UserSubscription = 2,
}

/**
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-types
 */
export enum EntitlementType {
	ApplicationSubscription = 8,
	FreePurchase = 7,
	DeveloperGift = 3,
	PremiumSubscription = 2,
	Purchase = 1,
	TestModePurchase = 4,
}
