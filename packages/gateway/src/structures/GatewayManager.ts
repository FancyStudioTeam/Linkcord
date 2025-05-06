import { EventEmitter } from "node:events";
import type { APIVersion, GatewayEvent, Nullable } from "@fancystudioteam/linkcord-types";
import { GatewayManagerError, fetchGatewayBot } from "#utils";
import { Shard } from "./Shard.js";

/**
 * @public
 */
export class GatewayManager extends EventEmitter<GatewayManagerEvents> {
  intents: number;
  options: GatewayManagerOptions;
  shardCount = 0;
  shards: Map<number, Shard> = new Map();
  token: string;
  url: Nullable<URL> = null;

  constructor(options: GatewayManagerOptions) {
    super();

    const { connection } = options;
    const { intents } = connection;

    this.intents = intents;
    this.options = options;
    this.token = options.token;
  }

  public get connectionProperties(): ConnectionProperties {
    const { connection } = this.options;
    const { properties } = connection;

    return properties;
  }

  async spawnShards(): Promise<void> {
    try {
      const { shards, url } = await fetchGatewayBot(this.token);

      this.shardCount = shards;
      this.url = new URL(url);

      for (let index = 0; index < shards; index++) {
        const shard = new Shard(this, index);

        shard.connect();
      }
    } catch (error) {
      const stringifiedError = String(error);

      new GatewayManagerError(stringifiedError);
    }
  }

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
  packet: [packet: GatewayEvent];
}

/**
 * @public
 */
export interface GatewayManagerOptions {
  connection: GatewayManagerConnection;
  token: string;
  version?: APIVersion;
}
