import { EventEmitter } from "node:events";
import type { APIVersion, GatewayEvent, Nullable } from "@fancystudioteam/linkcord-types";
import { fetchGatewayBot } from "../utils/functions/fetchGatewayBot.js";
import { GatewayShard } from "./GatewayShard.js";

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
  url: Nullable<URL> = null;

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

  getShardIdByGuildId(guildId: string): number {
    const { shardCount } = this;

    return Number(BigInt(guildId) >> 22n) % shardCount;
  }

  async spawnShards(): Promise<void> {
    const { shards, url } = await fetchGatewayBot(this.token);

    this.shardCount = shards;
    this.url = new URL(url);

    for (let index = 0; index < shards; index++) {
      const shard = new GatewayShard(this, index);

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
  /**
   * Emitted when the gateway shard socket is closed.
   */
  close: [code: number, reason: string, reconnectable: boolean];
  /**
   * Emitted when a debug message is received from a gateway shard or from the
   * manager.
   */
  debug: [message: string, shardId?: number];
  /**
   * Emitted when a gateway shard receives a `HELLO` opcode from the gateway.
   */
  hello: [heartbeatInterval: number, shardId: number];
  /**
   * Emitted when a gateway packet is received from a gateway shard.
   */
  packet: [packet: GatewayEvent, shardId: number];
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
