import { LinkcordConfiguration } from "../configuration/structures/LinkcordConfiguration.js";
import { GatewayManager } from "../gateway/index.js";
import { RESTManager } from "../rest/structures/RESTManager.js";
import type { Snowflake } from "../types/raw/index.js";
import { VoiceManager } from "../voice/structures/VoiceManager.js";
import { BaseClient } from "./BaseClient.js";
import { resolveGatewayIntents } from "./functions/resolveGatewayIntents.js";

/**
 * @public
 */
export class Client extends BaseClient {
  readonly gateway: GatewayManager;
  readonly rest: RESTManager;
  readonly unavailableGuilds = new Map<Snowflake, boolean>();
  readonly voice: VoiceManager;

  constructor() {
    super();

    const { gateway, intents, rest, token, voice } = LinkcordConfiguration.getOptions();

    if (!token || !intents) {
      throw new TypeError("Token or intents are missing from the configuration file.");
    }

    /**
     * TODO: Refactor this.
     */
    this.gateway = new GatewayManager({
      ...gateway,
      intents: resolveGatewayIntents(intents),
      token,
    });
    this.rest = new RESTManager({
      ...rest,
      token,
    });
    this.voice = new VoiceManager({
      ...voice,
      gatewayManager: this.gateway,
    });
  }

  async init(): Promise<void> {
    await super.init();
  }
}
