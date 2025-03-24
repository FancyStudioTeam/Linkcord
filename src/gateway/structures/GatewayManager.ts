import type { Client } from "#client";
import type {
  CreateGatewayManagerConnectionPropertiesOptions,
  CreateGatewayManagerOptions,
  GatewayVersion,
} from "#types";
import { resolveGatewayIntents } from "#util";
import { Shard } from "./Shard.js";

export class GatewayManager {
  protected _client: Client;
  protected _connectionProperties: CreateGatewayManagerConnectionPropertiesOptions;
  /** The gateway url. */
  readonly gatewayUrl: string;
  /** The intents to use when spawning a shard. */
  readonly intents: number;
  /** The maximum amount of shards to spawn. */
  readonly maximumShards: "auto" | number;
  /** The shards spawned. */
  readonly shards: Map<number, Shard>;
  /** The client token. */
  readonly token: string;
  /** The Discord gateway version. */
  readonly version: GatewayVersion;

  constructor(client: Client, options: CreateGatewayManagerOptions) {
    let { connectionProperties, token, intents, shards, version } = options;
    const { platform } = process;

    version ??= 10;

    this._client = client;
    this._connectionProperties = connectionProperties ?? {
      browser: "Linkcord",
      device: "Linkcord",
      os: platform,
    };
    this.gatewayUrl = `wss://gateway.discord.gg/?v=${version}&encoding=json`;
    this.intents = resolveGatewayIntents(intents);
    this.maximumShards = shards ?? "auto";
    this.shards = new Map();
    this.token = token;
    this.version = version;
  }

  /** Spawns and connects the shards. */
  async spawnShards(): Promise<void> {
    const { _client, maximumShards, shards } = this;
    let shardsToSpawn: number;

    if (maximumShards === "auto") {
      const gatewayBot = await _client.getGatewayBot();
      const { shards } = gatewayBot;

      shardsToSpawn = shards;
    } else {
      shardsToSpawn = maximumShards;
    }

    for (let i = 0; i < shardsToSpawn; i++) {
      const shard = new Shard(i, this);

      shards.set(i, shard);
      shard.connect();
    }
  }
}
