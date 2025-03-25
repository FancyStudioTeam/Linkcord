import type { DiscordAPIVersion } from "#types/shared";
import type { GatewayIntents } from "./events.js";

export interface CreateGatewayManagerOptions {
  /** The connection properties to use. */
  connectionProperties?: CreateGatewayManagerConnectionPropertiesOptions;
  /** The gateway intents to use. */
  intents: GatewayIntents[] | number;
  /** The client token to use. */
  token: string;
  /**
   * The amount of shards to spawn.
   *
   * @default "auto"
   *
   * @remarks When using "auto", this will make a request to the client's gateway
   * and retreive the recommended shard count.
   */
  shards?: "auto" | number;
  /**
   * The Discord gateway version to use.
   *
   * @default 10
   */
  version?: GatewayVersion;
}

export interface CreateGatewayManagerConnectionPropertiesOptions {
  /**
   * The browser used to connect.
   *
   * @default "Linkcord"
   */
  browser: string;
  /**
   * The device used to connect.
   *
   * @default "Linkcord"
   */
  device: string;
  /**
   * The operating system used to connect.
   *
   * @default "process.platform"
   */
  os: string;
}

export type GatewayVersion = DiscordAPIVersion;
