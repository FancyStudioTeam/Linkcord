import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sku#sku-object-sku-structure
 */
/**
 * biome-ignore lint/style/useNamingConvention: SKU is commonly written in
 * uppercase.
 */
export interface APISKU {
    application_id: Snowflake;
    flags: number;
    id: Snowflake;
    name: string;
    slug: string;
    type: SKUTypes;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sku#sku-object-sku-flags
 */
export enum SKUFlags {
    Available = 1 << 2,
    GuildSubscription = 1 << 7,
    UserSubscription = 1 << 8,
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/sku#sku-object-sku-types
 */
export enum SKUTypes {
    Consumable = 3,
    Durable = 2,
    Subscription = 5,
    SubscriptionGroup = 6,
}
