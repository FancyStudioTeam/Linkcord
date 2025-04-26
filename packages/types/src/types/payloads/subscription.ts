import type { ISO8601Date, Nullable, Snowflake } from "#types/shared";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/subscription#subscription-object
 */
export interface APISubscription {
  canceled_at: Nullable<ISO8601Date>;
  country?: string;
  current_period_end: ISO8601Date;
  current_period_start: ISO8601Date;
  entitlement_ids: Snowflake[];
  id: Snowflake;
  renewal_sku_ids: Nullable<Snowflake[]>;
  sku_ids: Snowflake[];
  status: SubscriptionStatus;
  user_id: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/subscription#subscription-statuses
 */
export enum SubscriptionStatus {
  Active = 0,
  Ending = 1,
  Inactive = 2,
}
