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

  get connectionProperties(): ConnectionProperties {
    const { connectionProperties } = this.options;
    const { browser, device, os } = connectionProperties ?? {};

    return {
      browser: browser ?? "Linkcord",
      device: device ?? "Linkcord",
      os: os ?? process.platform,
    };
  }

  getShardIdByGuildId(guildId: string): number {
    const { shardCount } = this;

    return Number(BigInt(guildId) >> 22n) % shardCount;
  }

  async spawnShards(): Promise<void> {
    const { shards, url } = await fetchGatewayBot(this.token);

    this.shardCount = shards;
    this.url = new URL(url);

    for (let index = 0; index < shards; index++) {
      const shard = new Shard(this, index);

      this.shards.set(shard.id, shard);

      shard.connect();
    }
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
export interface GatewayManagerEvents {
  debug: [message: string, shardId?: number];
  hello: [heartbeatInterval: number, shardId: number];
  packet: [packet: GatewayEvent, shardId: number];
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

/**
 * @public
 */
export type GatewayManagerConnectionProperties = Partial<ConnectionProperties>;
