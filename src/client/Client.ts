import { LinkcordConfiguration } from "#configuration/structures/LinkcordConfiguration.js";
import type { Snowflake } from "#types/index.js";
import { BaseClient } from "./BaseClient.js";

/**
 * @public
 */
export class Client extends BaseClient {
  readonly unavailableGuilds = new Map<Snowflake, boolean>();

  constructor() {
    super();

    const { intents, token } = LinkcordConfiguration.getOptions();

    if (!token || !intents) {
      throw new TypeError("Token or intents are missing from the configuration file.");
    }
  }

  async init(): Promise<void> {
    await super.init();
  }
}
