import { EventEmitter } from "node:events";
import type { APIVersion } from "@fancystudioteam/linkcord-types";
import { VoiceREST } from "./VoiceREST.js";

/**
 * @public
 */
export class RESTManager extends EventEmitter<RESTManagerEvents> {
  readonly options: RESTManagerOptions;
  readonly token: string;
  readonly version: APIVersion;
  readonly voice = new VoiceREST(this);

  constructor(options: RESTManagerOptions) {
    super();

    const { token } = options;

    this.options = options;
    this.token = token;
    this.version = 10;
  }

  static get DISCORD_API_URL() {
    return "https://discord.com/api/v10";
  }

  /**
   * @internal
   */
  private _createHeaders(reason?: string): Headers {
    const headers = new Headers();

    /**
     * TODO: Clear token if it contains the bot prefix.
     */
    headers.set("Authorization", `Bot ${this.token}`);
    headers.set("User-Agent", "Linkcord");

    if (reason) {
      headers.set("X-Audit-Log-Reason", reason);
    }

    return headers;
  }

  /**
   * @internal
   */
  /**
   * TODO: Implement ratelimit manager.
   * TODO: Allow query string params.
   */
  private async _makeRequest<Data, JSONParams = never, QueryStringParams = never>(
    method: RESTMethods,
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, QueryStringParams>,
  ): Promise<Data> {
    const { reason } = options ?? {};
    const headers = this._createHeaders(reason);
    const url = new URL(`${RESTManager.DISCORD_API_URL}/${endpoint}`);
    const urlRequest = url.toString();
    const request = await fetch(urlRequest, {
      method,
      headers,
    });

    return (await request.json()) as Data;
  }

  async get<Data, QueryStringParams = unknown>(
    endpoint: string,
    options?: MakeRequestOptions<never, QueryStringParams>,
  ): Promise<Data> {
    return await this._makeRequest<Data, never, QueryStringParams>(RESTMethods.Get, endpoint, options);
  }

  async patch<Data, JSONParams = unknown, QueryStringParams = unknown>(
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, QueryStringParams>,
  ): Promise<Data> {
    return await this._makeRequest<Data, JSONParams, QueryStringParams>(RESTMethods.Patch, endpoint, options);
  }
}

/**
 * @public
 */
export interface MakeRequestOptions<
  JSONParams = Record<string, boolean | number | string>,
  QueryStringParams = Record<string, boolean | number | string>,
> {
  json?: JSONParams;
  query?: QueryStringParams;
  reason?: string;
}

/**
 * @public
 */
export interface RESTManagerEvents {
  debug: [message: string];
}

/**
 * @public
 */
export interface RESTManagerOptions {
  token: string;
}

/**
 * @public
 */
export enum RESTMethods {
  Delete = "DELETE",
  Get = "GET",
  Patch = "PATCH",
  Post = "POST",
  Put = "PUT",
}
