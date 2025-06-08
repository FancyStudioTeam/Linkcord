import type { RESTGetSKUs, Snowflake } from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../utils/index.js";
import type { RESTManager } from "./RESTManager.js";

/**
 * @public
 */
// biome-ignore lint/style/useNamingConvention:
export class SKUREST {
  private _restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this._restManager = restManager;
  }

  /**
   * @see https://discord.com/developers/docs/resources/sku#list-skus
   */
  getSKUs<Result = RESTGetSKUs>(applicationId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.get<Result>(Endpoints.applicationSkus(applicationId));

    return request;
  }
}
