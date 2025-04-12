import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";

/**
 * Represents a Discord entitlement structure.
 * @see https://discord.com/developers/docs/resources/entitlement#entitlement-object-entitlement-structure
 */
export interface APIEntitlement {
  /** The id of the parent application. */
  application_id: Snowflake;
  /** Whether the entitlement was consumed. */
  consumed?: boolean;
  /** Whether the entitlement was deleted. */
  deleted: boolean;
  /** The time at which the entitlement was no longer valid. */
  ends_at: Nullable<ISO8601Date>;
  /** The id of the guild to which the access was granted. */
  guild_id?: Snowflake;
  /** The id of the entitlement. */
  id: Snowflake;
  /** The id of the sku to which the entitlement belongs. */
  sku_id: Snowflake;
  /** The time at which the entitlement started to be valid. */
  starts_at: Nullable<ISO8601Date>;
  /** The type of entitlement. */
  type: EntitlementTypes;
  /** The id of the user to which the access was granted. */
  user_id?: Snowflake;
}

/**
 * The available types for an entitlement.
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
