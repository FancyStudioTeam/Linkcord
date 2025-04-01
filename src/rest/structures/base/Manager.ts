import type { Client } from "#client";
import type { RESTManager } from "#rest";
import { MiscellaneousTransformer, UsersTransformer } from "#transformers";

export class Manager {
  /** The client instance. */
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Gets the client instance.
   *
   * @returns The client instance.
   */
  getClient(): Client {
    const { client } = this;

    return client;
  }

  /**
   * Gets the REST manager instance from the client instance.
   *
   * @returns The REST manager instance.
   */
  getRESTManager(): RESTManager {
    const client = this.getClient();
    const { rest } = client;

    return rest;
  }

  /**
   * Gets the transformers to transform the raw data into parsed data.
   *
   * @returns An array including the available transformers.
   */
  getTransformers(): Transformers {
    const client = this.getClient();
    const miscellaneous = new MiscellaneousTransformer(client);
    const users = new UsersTransformer(client);
    const transformers: Transformers = {
      miscellaneous,
      users,
    };

    return transformers;
  }
}

interface Transformers {
  miscellaneous: MiscellaneousTransformer;
  users: UsersTransformer;
}
