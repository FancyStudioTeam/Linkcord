import type { DiscordGatewayBot, GatewayBot } from "#types";
import { Endpoints } from "../../routes/Endpoints.js";
import { MiscellaneousTransformer } from "../../transformers/structures/MiscellaneousTransformer.js";
import type { RESTManager } from "./RESTManager.js";

export class MiscellaneousREST {
  protected _miscellaneousTransformer = new MiscellaneousTransformer();
  protected _restManager: RESTManager;

  constructor(restManager: RESTManager) {
    this._restManager = restManager;
  }

  /**
   * Gets the gateway bot object.
   *
   * @returns The gateway bot object.
   */
  async getGatewayBot(): Promise<GatewayBot> {
    const { _miscellaneousTransformer, _restManager } = this;
    const { gatewayBot } = Endpoints;
    const requestData = await _restManager.makeRequest<DiscordGatewayBot>("GET", gatewayBot());
    const parsedGatewayBot = _miscellaneousTransformer.rawGatewayBotToParsed(requestData);

    return parsedGatewayBot;
  }
}
