import type {
  RESTDeleteApplicationEntitlementTest,
  RESTGetApplicationEntitlement,
  RESTGetApplicationEntitlements,
  RESTGetApplicationEntitlementsQueryParams,
  RESTGetApplicationSKUs,
  RESTPostApplicationEntitlementConsume,
  RESTPostApplicationEntitlementTest,
  RESTPostApplicationEntitlementTestJSONParams,
  Snowflake,
} from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../utils/index.js";
import { BaseAPI } from "./base/BaseAPI.js";

/**
 * @public
 */
export class Applications extends BaseAPI {
  /**
   * @see https://discord.com/developers/docs/resources/entitlement#delete-test-entitlement
   */
  async deleteApplicationEntitlementTest<Result = RESTDeleteApplicationEntitlementTest>(
    applicationId: Snowflake,
    entitlementId: Snowflake,
  ): Promise<Result> {
    return await super.delete<Result>(Endpoints.applicationEntitlement(applicationId, entitlementId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#get-entitlement
   */
  async getApplicationEntitlement<Result = RESTGetApplicationEntitlement>(
    applicationId: Snowflake,
    entitlementId: Snowflake,
  ): Promise<Result> {
    return await super.get<Result>(Endpoints.applicationEntitlement(applicationId, entitlementId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#list-entitlements
   */
  async getApplicationEntitlements<Result = RESTGetApplicationEntitlements>(
    applicationId: Snowflake,
    options?: GetApplicationEntitlementsOptions,
  ): Promise<Result> {
    return await super.get<Result, RESTGetApplicationEntitlementsQueryParams>(
      Endpoints.applicationEntitlements(applicationId),
      options,
    );
  }

  /**
   * @see https://discord.com/developers/docs/resources/sku#list-skus
   */
  async getApplicationSKUs<Result = RESTGetApplicationSKUs>(applicationId: Snowflake): Promise<Result> {
    return await super.get<Result>(Endpoints.applicationSKUs(applicationId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#consume-an-entitlement
   */
  async postApplicationEntitlementConsume<Result = RESTPostApplicationEntitlementConsume>(
    applicationId: Snowflake,
    entitlementId: Snowflake,
  ): Promise<Result> {
    return await super.post<Result>(Endpoints.applicationEntitlementConsume(applicationId, entitlementId));
  }

  /**
   * @see https://discord.com/developers/docs/resources/entitlement#create-test-entitlement
   */
  async postApplicationEntitlementTest<Result = RESTPostApplicationEntitlementTest>(
    applicationId: Snowflake,
    options: PostApplicationEntitlementTestOptions,
  ): Promise<Result> {
    return await super.post<Result, RESTPostApplicationEntitlementTestJSONParams>(
      Endpoints.applicationEntitlements(applicationId),
      options,
    );
  }
}

/**
 * @public
 */
export interface GetApplicationEntitlementsOptions {
  query?: RESTGetApplicationEntitlementsQueryParams;
}

/**
 * @public
 */
export interface PostApplicationEntitlementTestOptions {
  json: RESTPostApplicationEntitlementTestJSONParams;
}
