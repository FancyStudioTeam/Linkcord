import type { RESTGetGateway, RESTGetGatewayBot } from "@fancystudioteam/linkcord-types";
import { Endpoints } from "../../../utils/index.js";
import { BaseAPI } from "../base/BaseAPI.js";

export class Gateway extends BaseAPI {
  async getGateway<Result = RESTGetGateway>(): Promise<Result> {
    return await super.get<Result>(Endpoints.gateway());
  }

  async getGatewayBot<Result = RESTGetGatewayBot>(): Promise<Result> {
    return await super.get<Result>(Endpoints.gatewayBot());
  }
}
