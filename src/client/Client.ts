import { LinkcordConfiguration } from "#configuration/structures/LinkcordConfiguration.js";
import { GatewayManager } from "#gateway/index.js";
import type { Snowflake } from "#types/index.js";
import { BaseClient } from "./BaseClient.js";
import { resolveGatewayIntents } from "./functions/resolveGatewayIntents.js";

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

  get token(): Readonly<string> {
    const { token } = LinkcordConfiguration.getOptions();

    return token;
  }

  get intents(): Readonly<number> {
    const { intents } = LinkcordConfiguration.getOptions();
    const resolvedIntents = resolveGatewayIntents(intents);

    return resolvedIntents;
  }

  async init(): Promise<void> {
    await LinkcordConfiguration.loadConfigurationFile();
    await super.init();

    const { gateway } = this;

    await gateway.init();
  }
}
