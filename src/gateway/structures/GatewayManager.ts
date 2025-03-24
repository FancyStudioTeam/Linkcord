import type { Client } from "#client";
import type { CreateGatewayManagerOptions, GatewayVersion } from "#types";
import { resolveGatewayIntents } from "#util";

export class GatewayManager {
  protected _client: Client;
  protected _gatewayUrl: string;
  protected _intents: number;
  protected _token: string;
  /** The maximum amount of shards to spawn. */
  readonly maximumShards: "auto" | number;
  /** The Discord gateway version. */
  readonly version: GatewayVersion;

  constructor(client: Client, options: CreateGatewayManagerOptions) {
    let { token, intents, shards, version } = options;

    version ??= 10;

    this._client = client;
    this._gatewayUrl = `wss://gateway.discord.gg/?v=${version}&encoding=json`;
    this._intents = resolveGatewayIntents(intents);
    this._token = token;
    this.maximumShards = shards ?? "auto";
    this.version = version;
  }
}
