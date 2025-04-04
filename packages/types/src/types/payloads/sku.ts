import type { Snowflake } from "#types/shared";

/**
 * https://discord.com/developers/docs/resources/sku#sku-object-sku-structure
 */
// biome-ignore lint/style/useNamingConvention:
export interface APISKU {
  application_id: Snowflake;
  flags: SKUFlags;
  id: Snowflake;
  name: string;
  slug: string;
  type: SKUTypes;
}

/**
 * https://discord.com/developers/docs/resources/sku#sku-object-sku-flags
 */
export enum SKUFlags {
  Available = 1 << 2,
  GuildSubscription = 1 << 7,
  UserSubscription = 1 << 8,
}

/**
 * https://discord.com/developers/docs/resources/sku#sku-object-sku-types
 */
export enum SKUTypes {
  Consumable = 3,
  Durable = 2,
  Subscription = 5,
  SubscriptionGroup = 6,
}
