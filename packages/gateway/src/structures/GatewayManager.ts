import { EventEmitter } from "node:events";
import type { APIVersion, GatewayEvent, Nullable } from "@fancystudioteam/linkcord-types";
import { GatewayManagerError, fetchGatewayBot } from "#utils";
import { Shard } from "./Shard.js";

/**
 * @public
 */
export class GatewayManager extends EventEmitter<GatewayManagerEvents> {
  readonly intents: number;
  readonly options: GatewayManagerOptions;
  readonly version: APIVersion;
  shardCount = 0;
  shards: Map<number, Shard> = new Map();
  token: string;
  url: Nullable<URL> = null;

  constructor(options: GatewayManagerOptions) {
    super();

    let { intents, version, token } = options;

    version ??= 10;

    if (version < 9) {
      throw new GatewayManagerError("API versions below 9 are currently deprecated and they should not be used.");
    }

    if (version > 10) {
      throw new GatewayManagerError("Invalid gateway version.");
    }

    this.intents = intents;
    this.options = options;
    this.token = token;
    this.version = version;
  }

  get connectionProperties(): GatewayManagerConnectionProperties {
    const { connectionProperties } = this.options;
    const defaultConnectionProperties: GatewayManagerConnectionProperties = {
      browser: "Linkcord",
      device: "Linkcord",
      os: process.platform,
    };

    return connectionProperties ?? defaultConnectionProperties;
  }

  getShardIdByGuildId(guildId: string): number {
    const { shardCount } = this;

    return Number(guildId) >> (22 % shardCount);
  }

  async spawnShards(): Promise<void> {
    console.log("spawnShards");
    try {
      console.log("fetchGatewayBot");
      const { shards, url } = await fetchGatewayBot(this.token);
      console.log(shards, url);

      this.shardCount = shards;
      this.url = new URL(url);

      for (let index = 0; index < shards; index++) {
        const shard = new Shard(this, index);

        shard.connect();
      }
    } catch (error) {
      console.log(error);
      console.log("fetchGatewayBot error");
      const stringifiedError = String(error);

      new GatewayManagerError(stringifiedError);
    }
    console.log("spawnShards end");
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
