import type { RESTGetSKUs, Snowflake } from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../utils/index.js";
import type { RESTManager } from "./RESTManager.js";

/**
 * @public
 */
// biome-ignore lint/style/useNamingConvention:
export class SKUREST {
  restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this.restManager = restManager;
  }

  /**
   * @see https://discord.com/developers/docs/resources/sku#list-skus
   */
  getSKUs<Result = RESTGetSKUs>(applicationId: Snowflake): Promise<Result> {
    const { restManager } = this;
    const request = restManager.get<Result>(Endpoints.applicationSkus(applicationId));

    return request;
  }
}
