import { EventEmitter } from "node:events";
import type { APIVersion, GatewayEvent, Nullable } from "@fancystudioteam/linkcord-types";
import { GatewayManagerError, fetchGatewayBot } from "#utils";
import { Shard } from "./Shard.js";

/**
 * @public
 */
export class GatewayManager extends EventEmitter<GatewayManagerEvents> {
  readonly options: GatewayManagerOptions;
  intents: number;
  shardCount = 0;
  shards: Map<number, Shard> = new Map();
  token: string;
  url: Nullable<URL> = null;

  constructor(options: GatewayManagerOptions) {
    super();

    const { intents, version, token } = options;

    if (version !== undefined && version < 9) {
      throw new GatewayManagerError("API versions below 9 are currently deprecated and they should not be used.");
    }

    this.intents = intents;
    this.options = options;
    this.token = token;
  }

  public get connectionProperties(): GatewayManagerConnectionProperties {
    const { connectionProperties } = this.options;
    const defaultConnectionProperties: GatewayManagerConnectionProperties = {
      browser: "Linkcord",
      device: "Linkcord",
      os: process.platform,
    };

    return connectionProperties ?? defaultConnectionProperties;
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
  packet: [shardId: number, packet: GatewayEvent];
}

/**
 * @public
 */
export interface GatewayManagerOptions {
  connectionProperties?: GatewayManagerConnectionProperties;
  intents: number;
  token: string;
  version?: APIVersion;
}
