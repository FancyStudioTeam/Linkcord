import { EventEmitter } from "node:events";
import type { APIVersion, Nullable } from "@fancystudioteam/linkcord-types";
import { GatewayManagerError, fetchGatewayBot } from "#utils";
import { Shard } from "./Shard.js";

/**
 * @public
 */
export class GatewayManager extends EventEmitter<GatewayManagerEvents> {
  options: GatewayManagerOptions;
  shards: Map<number, Shard> = new Map();
  token: string;
  totalShards = 0;
  url: Nullable<URL> = null;
  intents: number;

  constructor(options: GatewayManagerOptions) {
    super();

    const { connection } = options;
    const { intents } = connection;

    this.intents = intents;
    this.options = options;
    this.token = options.token;
  }

  /**
   * @public
   */
  get connectionProperties(): ConnectionProperties {
    const { connection } = this.options;
    const { properties } = connection;

    return properties;
  }

  /**
   * @public
   */
  async spawnShards(): Promise<void> {
    try {
      const { shards, url } = await fetchGatewayBot(this.token);

      this.url = new URL(url);

      for (let index = 0; index < shards; index++) {
        const shard = new Shard(this, index, shards);

        shard.connect();
      }
    } catch (error) {
      const stringifiedError = String(error);

      new GatewayManagerError(stringifiedError);
    }
  }

  /**
   * @public
   */
  get version(): APIVersion {
    const { version } = this.options;

    return version ?? 10;
  }
}

/**
 * @public
 */
export interface ConnectionProperties {
  browser: string;
  device: string;
  os: string;
}

/**
 * @public
 */
export interface GatewayManagerConnection {
  intents: number;
  properties: ConnectionProperties;
}

/**
 * @public
 */
export interface GatewayManagerConnectionProperties {
  browser: string;
  device: string;
  os: string;
}

/**
 * @public
 */
export interface GatewayManagerEvents {
  debug: [shardId: number, message: string];
  hello: [shardId: number, heartbeatInterval: number];
}

/**
 * @public
 */
export interface GatewayManagerOptions {
  connection: GatewayManagerConnection;
  token: string;
  version?: APIVersion;
}
