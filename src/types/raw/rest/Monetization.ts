import type { APISubscription } from "../payloads/Subscriptions.js";
import type { Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/subscription#query-string-params
 */
export interface RESTGetSKUSubscriptionsQueryParams {
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
export type RESTGetSKUSubscriptions = APISubscription[];
