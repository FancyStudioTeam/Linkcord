import type {
  RESTGetSKUSubscription,
  RESTGetSKUSubscriptions,
  RESTGetSKUSubscriptionsQueryParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../utils/index.js";
import { BaseAPI } from "./base/BaseAPI.js";

/**
 * @public
 */
export class Monetization extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/subscription#get-sku-subscription
   */
  async getSKUSubscription<Result = RESTGetSKUSubscription>(
    skuId: Snowflake,
    subscriptionId: Snowflake,
  ): Promise<Result> {
    return await super.get<Result>(Endpoints.skuSubscription(skuId, subscriptionId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/subscription#list-sku-subscriptions
   */
  async getSKUSubscriptions<Result = RESTGetSKUSubscriptions>(
    skuId: Snowflake,
    options?: GetSKUSubscriptionsOptions,
  ): Promise<Result> {
    return await super.get<Result, RESTGetSKUSubscriptionsQueryParams>(Endpoints.skuSubscriptions(skuId), options);
  }
}

/**
 * @public
 */
export interface GetSKUSubscriptionsOptions {
  query?: RESTGetSKUSubscriptionsQueryParams;
}
