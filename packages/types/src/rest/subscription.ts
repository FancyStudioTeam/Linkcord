import type { APISubscription } from "#payloads";
import type { Snowflake } from "#shared";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/subscription#list-sku-subscriptions-query-string-params
 */
export interface RESTListSKUSubscriptionsQueryParams {
  after?: Snowflake;
  before?: Snowflake;
  limit?: number;
  user_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/subscription#get-sku-subscription
 */
export type RESTGetSKUSubscription = APISubscription;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/subscription#list-sku-subscriptions
 */
export type RESTListSKUSubscriptions = APISubscription[];
