import type { DiscordAPIVersion } from "../shared.js";

/**
 * Types related to the REST manager instance.
 */

export interface CreateRestManagerOptions {
  /** The client token to use. */
  token: string;
  /**
   * The Discord REST API version to use.
   *
   * @default 10
   */
  version?: RESTVersion;
}

export interface MakeRequestOptions {
  /**
   * The data to send in the request body.
   *
   * @default undefined
   */
  json?: unknown;
  /**
   * Whether to use the authorization header.
   *
   * @default true
   */
  useAuthorization?: boolean;
}

/**
 * Other types used in some instance types.
 */

type RESTVersion = DiscordAPIVersion;
