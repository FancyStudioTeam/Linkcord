import type { Snowflake } from "#types/shared";

/**
 * Represents a Discord SKU structure.
 * @see https://discord.com/developers/docs/resources/sku#sku-object-sku-structure
 */
// biome-ignore lint/style/useNamingConvention:
export interface APISKU {
  /** The id of the parent application of the SKU. */
  application_id: Snowflake;
  /** The flags of the SKU. */
  flags: SKUFlags;
  /** The id of the SKU. */
  id: Snowflake;
  /** The customer-facing name of the SKU. */
  name: string;
  /** The system-generated url based on the SKU's name. */
  slug: string;
  /** The type of the SKU. */
  type: SKUTypes;
}

/**
 * The available flags for a SKU.
 * @see https://discord.com/developers/docs/resources/sku#sku-object-sku-flags
 */
export enum SKUFlags {
  Available = 1 << 2,
  GuildSubscription = 1 << 7,
  UserSubscription = 1 << 8,
}

/**
 * The available types for a SKU.
 * @see https://discord.com/developers/docs/resources/sku#sku-object-sku-types
 */
export enum SKUTypes {
  Consumable = 3,
  Durable = 2,
  Subscription = 5,
  SubscriptionGroup = 6,
}
