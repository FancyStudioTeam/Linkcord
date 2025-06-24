import { LinkcordConfiguration } from "../configuration/structures/LinkcordConfiguration.js";
import { GatewayManager } from "../gateway/index.js";
import { RESTManager } from "../rest/structures/RESTManager.js";
import type { User } from "../structures/index.js";
import type { If, Snowflake } from "../types/raw/index.js";
import { VoiceManager } from "../voice/structures/VoiceManager.js";
import { BaseClient } from "./BaseClient.js";
import { resolveGatewayIntents } from "./functions/resolveGatewayIntents.js";

/**
 * @public
 */
export class Client<Ready extends boolean = boolean> extends BaseClient {
  readonly gateway: GatewayManager;
  readonly rest: RESTManager;
  readonly unavailableGuilds: Map<Snowflake, boolean> = new Map();
  readonly voice: VoiceManager;

  ready: Ready;
  user: If<Ready, User, null> = null as If<Ready, User, null>;

  constructor() {
    super();

    const { gateway, intents, rest, token, voice } = LinkcordConfiguration.getOptions();

    if (!token || !intents) {
      throw new TypeError("Token or intents are missing from the configuration file.");
    }

    this.gateway = new GatewayManager({
      ...gateway,
      intents: resolveGatewayIntents(intents),
      token,
    });
    this.ready = false as Ready;
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

  isReady(): this is Client<true> {
    return this.ready;
  }
}
