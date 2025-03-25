import type { DiscordAPIVersion } from "#types/shared";

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

export enum RESTMethod {
  Delete = "DELETE",
  Get = "GET",
  Patch = "PATCH",
  Post = "POST",
  Put = "PUT",
}

export type RESTVersion = DiscordAPIVersion;
