import type { DiscordAPIVersion } from "../shared.js";
import type { GatewayIdentifyEventPropertiesData } from "./events.js";

/**
 * Types related to the gateway manager instance.
 */

export interface CreateGatewayManagerOptions {
  /** The connection properties to use. */
  connectionProperties?: CreateGatewayManagerConnectionPropertiesOptions;
  /** The gateway intents to use. */
  intents: GatewayIdentifyEventPropertiesData[] | number;
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

/**
 * Types related to the shard instance.
 */

export interface ShardEvents {
  hello: [heartbeatInterval: number];
  debug: [message: string];
}

/**
 * Other types used in some instance types.
 */

export type GatewayVersion = DiscordAPIVersion;
