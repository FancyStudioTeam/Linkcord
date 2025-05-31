import { EventEmitter } from "node:events";
import type { APIVersion, GatewayEvent } from "@fancystudioteam/linkcord-types";
import { fetchGatewayBot } from "@fancystudioteam/linkcord-utils";
import { GatewayShard, type GatewayShardReady } from "./GatewayShard.js";

/**
 * @public
 */
export class GatewayManager extends EventEmitter<GatewayManagerEvents> {
  readonly intents: number;
  readonly options: GatewayManagerOptions;
  readonly shards = new Map<number, GatewayShard>();
  readonly token: string;
  readonly version: APIVersion;

  shardCount = 0;
  url: URL | null = null;

  constructor(options: GatewayManagerOptions) {
    super();

    const { intents, token } = options;

    this.intents = intents;
    this.options = options;
    this.token = token;
    this.version = 10;
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

  async spawnShards(): Promise<void> {
    const { token } = this;
    const { shards, url } = await fetchGatewayBot(token);

    this.shardCount = shards;
    this.url = new URL(url);

    for (let id = 0; id < shards; id++) {
      if (this.shards.has(id)) {
        continue;
      }

      const shard = new GatewayShard(this, id);

      this.shards.set(shard.id, shard);

      shard.connect();
      shard.on("close", (code, reason, reconnectable, shardId) =>
        this.emit("close", code, reason, reconnectable, shardId),
      );
      shard.on("debug", (message, shardId) => this.emit("debug", message, shardId));
      shard.on("hello", (heartbeatInterval, shardId) => this.emit("hello", heartbeatInterval, shardId));
      shard.on("packet", (packet, shardId) => this.emit("packet", packet, shardId));
      shard.on("ready", (data, shardId) => this.emit("ready", data, shardId));
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
  close: [code: number, reason: string, reconnectable: boolean, shard: GatewayShard];
  debug: [message: string, shard?: GatewayShard];
  hello: [heartbeatInterval: number, shard: GatewayShard];
  packet: [packet: GatewayEvent, shard: GatewayShard];
  ready: [data: GatewayShardReady, shard: GatewayShard];
}

/**
 * @public
 */
export interface GatewayManagerOptions {
  connectionProperties?: GatewayManagerConnectionProperties;
  intents: number;
  token: string;
}

/**
 * @public
 */
export type GatewayManagerConnectionProperties = Partial<ConnectionProperties>;
