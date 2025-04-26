import type { Snowflake } from "#types/shared";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sku#sku-object-sku-structure
 */
export interface APISku {
  application_id: Snowflake;
  flags: SkuFlags;
  id: Snowflake;
  name: string;
  slug: string;
  type: SkuTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sku#sku-object-sku-flags
 */
export enum SkuFlags {
  Available = 1 << 2,
  GuildSubscription = 1 << 7,
  UserSubscription = 1 << 8,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sku#sku-object-sku-types
 */
export enum SkuTypes {
  Consumable = 3,
  Durable = 2,
  Subscription = 5,
  SubscriptionGroup = 6,
}
