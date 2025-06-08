import type {
  RESTDeleteEntitlementTest,
  RESTGetEntitlement,
  RESTGetEntitlements,
  RESTGetEntitlementsQueryParams,
  RESTPostEntitlementConsume,
  RESTPostEntitlementTest,
  RESTPostEntitlementTestJSONParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../../utils/index.js";
import { BaseAPI } from "../base/BaseAPI.js";

/**
 * @public
 */
export class Entitlement extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/entitlement#delete-test-entitlement
   */
  deleteEntitlementTest<Result = RESTDeleteEntitlementTest>(
    applicationId: Snowflake,
    entitlementId: Snowflake,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.delete<Result>(Endpoints.applicationEntitlement(applicationId, entitlementId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#get-entitlement
   */
  getEntitlement<Result = RESTGetEntitlement>(applicationId: Snowflake, entitlementId: Snowflake): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.get<Result>(Endpoints.applicationEntitlement(applicationId, entitlementId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#list-entitlements
   */
  getEntitlements<Result = RESTGetEntitlements>(
    applicationId: Snowflake,
    options?: GetEntitlementsOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.get<Result, RESTGetEntitlementsQueryParams>(
      Endpoints.applicationEntitlements(applicationId),
      options,
    );

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#consume-an-entitlement
   */
  postEntitlementConsume<Result = RESTPostEntitlementConsume>(
    applicationId: Snowflake,
    entitlementId: Snowflake,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.post<Result>(Endpoints.applicationEntitlementConsume(applicationId, entitlementId));

    return request;
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement
   */
  postEntitlementTest<Result = RESTPostEntitlementTest>(
    applicationId: Snowflake,
    options: PostEntitlementTestOptions,
  ): Promise<Result> {
    const { _restManager } = this;
    const request = _restManager.post<Result, RESTPostEntitlementTestJSONParams>(
      Endpoints.applicationEntitlements(applicationId),
      options,
    );

    return request;
  }
}

/**
 * @public
 */
export interface GetEntitlementsOptions {
  query?: RESTGetEntitlementsQueryParams;
}

/**
 * @public
 */
export interface PostEntitlementTestOptions {
  json: RESTPostEntitlementTestJSONParams;
}
