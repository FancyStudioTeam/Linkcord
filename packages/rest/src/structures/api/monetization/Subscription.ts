import type {
  RESTGetSKUSubscription,
  RESTGetSKUSubscriptions,
  RESTGetSKUSubscriptionsQueryParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../../utils/index.js";
import { BaseAPI } from "../base/BaseAPI.js";

/**
 * @public
 */
export class Subscription extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/subscription#get-sku-subscription
   */
  getSKUSubscription<Result = RESTGetSKUSubscription>(skuId: Snowflake, subscriptionId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.get<Result>(Endpoints.skuSubscription(skuId, subscriptionId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/subscription#list-sku-subscriptions
   */
  getSKUSubscriptions<Result = RESTGetSKUSubscriptions>(
    skuId: Snowflake,
    options?: GetSKUSubscriptionsOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.get<Result, RESTGetSKUSubscriptionsQueryParams>(
      Endpoints.skuSubscriptions(skuId),
      options,
    );

    return request;
  }
}

/**
 * @public
 */
export interface GetSKUSubscriptionsOptions {
  query?: RESTGetSKUSubscriptionsQueryParams;
}
