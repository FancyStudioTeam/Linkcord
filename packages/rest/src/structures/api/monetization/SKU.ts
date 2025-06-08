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
  async getSKUs<Result = RESTGetSKUs>(applicationId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.applicationSkus(applicationId));
  }
}
