import { MiscellaneousTransformer } from "#transformers";
import type { DiscordGateway, DiscordGatewayBot, Gateway, GatewayBot } from "#types/miscellaneous/gateway";
import type { DiscordSoundboardSound, SoundboardSound } from "#types/miscellaneous/soundboard";
import { RESTMethod } from "#types/rest/manager";
import { Routes } from "#util";
import type { RESTManager } from "./RESTManager.js";

export class MiscellaneousREST {
  protected _restManager: RESTManager;
  protected _transformer: MiscellaneousTransformer;

  constructor(restManager: RESTManager) {
    this._restManager = restManager;
    this._transformer = new MiscellaneousTransformer(restManager);
  }

  /**
   * Gets the Discord default soundboard sound objects.
   *
   * @returns An array containing the Discord default soundboard sound objects.
   */
  async getDefaultSoundboardSounds(): Promise<SoundboardSound[]> {
    const { _restManager, _transformer } = this;
    const { soundboardDefaultSounds } = Routes;
    const rawSoundboardSounds = await _restManager.makeRequest<DiscordSoundboardSound[]>(
      RESTMethod.Get,
      soundboardDefaultSounds(),
    );
    const parsedSoundboardSounds = rawSoundboardSounds.map((rawSoundboardSound) =>
      _transformer.rawSoundboardSoundToParsed(rawSoundboardSound),
    );

    return parsedSoundboardSounds;
  }

  /**
   * Gets the gateway object.
   *
   * @returns The gateway object.
   */
  async getGateway(): Promise<Gateway> {
    const { _restManager, _transformer } = this;
    const { gateway } = Routes;
    const rawGateway = await _restManager.makeRequest<DiscordGateway>(RESTMethod.Get, gateway(), {
      useAuthorization: false,
    });
    const parsedGateway = _transformer.rawGatewayToParsed(rawGateway);

    return parsedGateway;
  }

  /**
   * Gets the gateway bot object.
   *
   * @returns The gateway bot object.
   */
  async getGatewayBot(): Promise<GatewayBot> {
    const { _restManager, _transformer } = this;
    const { gatewayBot } = Routes;
    const rawGatewayBot = await _restManager.makeRequest<DiscordGatewayBot>(RESTMethod.Get, gatewayBot());
    const parsedGatewayBot = _transformer.rawGatewayBotToParsed(rawGatewayBot);

    return parsedGatewayBot;
  }
}
