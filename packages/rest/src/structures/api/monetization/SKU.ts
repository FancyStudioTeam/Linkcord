import type { RESTGetSKUs, Snowflake } from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../../utils/index.js";
import { BaseAPI } from "../base/BaseAPI.js";

/**
 * @public
 */
// biome-ignore lint/style/useNamingConvention:
export class SKU extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/sku#list-skus
   */
  getSKUs<Result = RESTGetSKUs>(applicationId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.get<Result>(Endpoints.applicationSkus(applicationId));

    return request;
  }
}
