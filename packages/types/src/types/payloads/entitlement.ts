import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-structure
 */
export interface APIEntitlement {
  application_id: Snowflake;
  consumed?: boolean;
  deleted: boolean;
  ends_at: Nullable<ISO8601Date>;
  guild_id?: Snowflake;
  id: Snowflake;
  sku_id: Snowflake;
  starts_at: Nullable<ISO8601Date>;
  type: EntitlementTypes;
  user_id?: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-types
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
