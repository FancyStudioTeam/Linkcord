import { LinkcordConfiguration } from "#configuration/structures/LinkcordConfiguration.js";
import { GatewayManager } from "#gateway/index.js";
import type { Snowflake } from "#types/index.js";
import { BaseClient } from "./BaseClient.js";

/**
 * @public
 */
export class Client extends BaseClient {
  readonly gateway: GatewayManager;
  readonly unavailableGuilds = new Map<Snowflake, boolean>();

  constructor() {
    super();

    this.gateway = new GatewayManager(this);
  }

  async init(): Promise<void> {
    await LinkcordConfiguration.loadConfigurationFile();
    await super.init();

    const { gateway } = this;
    const { intents, token } = LinkcordConfiguration.getOptions();

    gateway.setIntents(intents);
    gateway.setToken(token);
    await gateway.init();
  }
}
