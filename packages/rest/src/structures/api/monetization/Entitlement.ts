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
  async deleteEntitlementTest<Result = RESTDeleteEntitlementTest>(
    applicationId: Snowflake,
    entitlementId: Snowflake,
  ): Promise<Result> {
    return await super.delete<Result>(Endpoints.applicationEntitlement(applicationId, entitlementId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#get-entitlement
   */
  async getEntitlement<Result = RESTGetEntitlement>(
    applicationId: Snowflake,
    entitlementId: Snowflake,
  ): Promise<Result> {
    return await super.get<Result>(Endpoints.applicationEntitlement(applicationId, entitlementId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#list-entitlements
   */
  async getEntitlements<Result = RESTGetEntitlements>(
    applicationId: Snowflake,
    options?: GetEntitlementsOptions,
  ): Promise<Result> {
    return await super.get<Result, RESTGetEntitlementsQueryParams>(
      Endpoints.applicationEntitlements(applicationId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#consume-an-entitlement
   */
  async postEntitlementConsume<Result = RESTPostEntitlementConsume>(
    applicationId: Snowflake,
    entitlementId: Snowflake,
  ): Promise<Result> {
    return await super.post<Result>(Endpoints.applicationEntitlementConsume(applicationId, entitlementId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement
   */
  async postEntitlementTest<Result = RESTPostEntitlementTest>(
    applicationId: Snowflake,
    options: PostEntitlementTestOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostEntitlementTestJSONParams>(
      Endpoints.applicationEntitlements(applicationId),
      options,
    );
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
