import type { Snowflake } from "#types/index.js";
import { BaseClient } from "./BaseClient.js";

/**
 * @public
 */
export class Client extends BaseClient {
  readonly unavailableGuilds = new Map<Snowflake, boolean>();

  async init(): Promise<void> {
    await super.init();
  }
}
