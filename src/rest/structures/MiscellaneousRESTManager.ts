import type { Client } from "#client";
import type { Gateway, RESTGetGatewayBotResult, RESTGetGatewayResult } from "#types";
import { Routes } from "#util";
import { RESTMethod } from "./RESTManager.js";
import { Manager } from "./base/Manager.js";

export class MiscellaneousRESTManager extends Manager {
  // biome-ignore lint/complexity/noUselessConstructor:
  constructor(client: Client) {
    super(client);
  }

  /**
   * Gets the gateway object.
   *
   * @returns The gateway object.
   */
  async getGateway(): Promise<Gateway> {
    const restManager = this.getRESTManager();
    const { miscellaneous } = this.getTransformers();
    const { gateway } = Routes;
    const rawGateway = await restManager.makeRequest<RESTGetGatewayResult>(RESTMethod.Get, gateway());
    const parsedGateway = miscellaneous.rawGatewayToParsed(rawGateway);

    return parsedGateway;
  }

  /**
   * Gets the gateway bot object.
   *
   * @returns The gateway bot object.
   */
  async getGatewayBot(): Promise<Gateway> {
    const restManager = this.getRESTManager();
    const { miscellaneous } = this.getTransformers();
    const { gatewayBot } = Routes;
    const rawGatewayBot = await restManager.makeRequest<RESTGetGatewayBotResult>(RESTMethod.Get, gatewayBot());
    const parsedGatewayBot = miscellaneous.rawGatewayBotToParsed(rawGatewayBot);

    return parsedGatewayBot;
  }
}
