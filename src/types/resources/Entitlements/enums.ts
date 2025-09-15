/**
 * The types of owner of an entitlement.
 * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement-json-params
 *
 * @group API/Enums
 */
export enum EntitlementOwnerTypes {
	GuildSubscription = 1,
	UserSubscription = 2,
}

/**
 * The types of an entitlement.
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-types
 *
 * @group API/Enums
 */
export enum EntitlementTypes {
	ApplicationSubscription = 8,
	FreePurchase = 7,
	DeveloperGift = 3,
	PremiumSubscription = 2,
	Purchase = 1,
	TestModePurchase = 4,
}
