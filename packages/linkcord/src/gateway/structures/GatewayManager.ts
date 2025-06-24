import { EventEmitter } from "node:events";
import type { APIUser, APIVersion, GatewayEvent } from "@fancystudioteam/linkcord-types";
import { fetchGatewayBot } from "@fancystudioteam/linkcord-utils";
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
  url: URL | null = null;

  constructor(options: GatewayManagerOptions) {
    super();

    const { intents, token } = options;

    this.intents = intents;
    this.options = options;
    this.token = token;
    this.version = 10;
  }

  /**
   * @internal
   */
  private _watchGatewayShards(shard: GatewayShard): void {
    shard.on("close", (data) => this.emit("close", data));
    shard.on("debug", (data) => this.emit("debug", data));
    shard.on("hello", (data) => this.emit("hello", data));
    shard.on("packet", (data) => this.emit("packet", data));
    shard.on("ready", (data) => this.emit("ready", data));
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
      this._watchGatewayShards(shard);
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
  close: [
    payload: {
      code: number;
      gatewayShard: GatewayShard;
      reason: string;
      reconnectable: boolean;
    },
  ];
  debug: [
    payload: {
      gatewayShard: GatewayShard;
      message: string;
    },
  ];
  hello: [
    payload: {
      gatewayShard: GatewayShard;
      heartbeatInterval: number;
    },
  ];
  packet: [
    payload: {
      gatewayShard: GatewayShard;
      packet: GatewayEvent;
    },
  ];
  ready: [
    payload: {
      gatewayShard: GatewayShard;
      user: APIUser;
    },
  ];
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
