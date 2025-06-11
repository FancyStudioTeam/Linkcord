import { EventEmitter } from "node:events";
import { replaceBotPrefix } from "@fancystudioteam/linkcord-utils";
import { REST_VERSION } from "../utils/constants.js";
import { APIManager } from "./APIManager.js";
import { Guild } from "./api/Guilds.js";

/**
 * @public
 */
export class RESTManager extends EventEmitter<RESTManagerEvents> {
  readonly api = new APIManager(this);
  readonly guilds = new Guild(this);
  readonly options: RESTManagerOptions;
  readonly token: string;

  constructor(options: RESTManagerOptions) {
    super();

    const { token } = options;

    this.options = options;
    this.token = replaceBotPrefix(token);
  }

  static get DISCORD_API_URL(): string {
    return `https://discord.com/api/v${REST_VERSION}`;
  }

  /**
   * @internal
   */
  private _createHeaders(reason?: string): Headers {
    const headers = new Headers();

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
   * TODO: Handle data when response is not JSON.
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

  async delete<Data>(endpoint: string, options?: DeleteOptions): Promise<Data> {
    return await this._makeRequest<Data, never, never>(RESTMethods.Delete, endpoint, options);
  }

  async get<Data, QueryStringParams = never>(endpoint: string, options?: GetOptions<QueryStringParams>): Promise<Data> {
    return await this._makeRequest<Data, never, QueryStringParams>(RESTMethods.Get, endpoint, options);
  }

  async patch<Data, JSONParams = never>(endpoint: string, options?: PatchOptions<JSONParams>): Promise<Data> {
    return await this._makeRequest<Data, JSONParams, never>(RESTMethods.Patch, endpoint, options);
  }

  async post<Data, JSONParams = never>(endpoint: string, options?: PostOptions<JSONParams>): Promise<Data> {
    return await this._makeRequest<Data, JSONParams, never>(RESTMethods.Post, endpoint, options);
  }

  async put<Data, JSONParams = never>(endpoint: string, options?: PutOptions<JSONParams>): Promise<Data> {
    return await this._makeRequest<Data, JSONParams, never>(RESTMethods.Put, endpoint, options);
  }
}

/**
 * @public
 */
export interface DeleteOptions {
  reason?: string;
}

/**
 * @public
 */
export interface GetOptions<QueryStringParams> {
  query?: QueryStringParams;
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
export interface PatchOptions<JSONParams> {
  json?: JSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PostOptions<JSONParams> {
  json?: JSONParams;
  reason?: string;
}

/**
 * @public
 */
export interface PutOptions<JSONParams> {
  json?: JSONParams;
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
