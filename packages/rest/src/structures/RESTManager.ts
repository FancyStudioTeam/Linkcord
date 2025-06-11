import { EventEmitter } from "node:events";
import { replaceBotPrefix } from "@fancystudioteam/linkcord-utils";
import { REST_VERSION } from "../utils/constants.js";
import { APIManager } from "./APIManager.js";
import { Channels } from "./api/Channels.js";
import { Guild } from "./api/Guilds.js";
import { Miscellaneous } from "./api/Miscellaneous.js";
import { Webhooks } from "./api/Webhooks.js";

/**
 * @public
 */
export class RESTManager extends EventEmitter<RESTManagerEvents> {
  readonly api = new APIManager(this);
  readonly channels = new Channels(this);
  readonly guilds = new Guild(this);
  readonly miscellaneous = new Miscellaneous(this);
  readonly options: RESTManagerOptions;
  readonly token: string;
  readonly webhooks = new Webhooks(this);

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
  /**
   * TODO: Handle authorization when it is not required.
   */
  private createHeaders(options?: CreateHeadersOptions): Headers {
    const { reason } = options ?? {};
    const headers = new Headers();

    headers.set("User-Agent", "Linkcord");
    headers.set("Authorization", `Bot ${this.token}`);

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
  private async makeRequest<Data, JSONParams = never, QueryStringParams = never>(
    method: RESTMethods,
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, QueryStringParams>,
  ): Promise<Data> {
    const headers = this.createHeaders(options);
    const url = new URL(`${RESTManager.DISCORD_API_URL}/${endpoint}`);
    const urlRequest = url.toString();
    const request = await fetch(urlRequest, {
      method,
      headers,
    });

    return (await request.json()) as Data;
  }

  async delete<Data, QueryStringParams = RequestParams>(
    endpoint: string,
    options?: MakeRequestOptions<never, QueryStringParams>,
  ): Promise<Data> {
    return await this.makeRequest<Data, never, QueryStringParams>(RESTMethods.Delete, endpoint, options);
  }

  async get<Data, QueryStringParams = RequestParams>(
    endpoint: string,
    options?: MakeRequestOptions<never, QueryStringParams>,
  ): Promise<Data> {
    return await this.makeRequest<Data, never, QueryStringParams>(RESTMethods.Get, endpoint, options);
  }

  async patch<Data, JSONParams = RequestParams, QueryStringParams = RequestParams>(
    endpoint: string,
    options: MakeRequestOptions<JSONParams, QueryStringParams>,
  ): Promise<Data> {
    return await this.makeRequest<Data, JSONParams, QueryStringParams>(RESTMethods.Patch, endpoint, options);
  }

  async post<Data, JSONParams = RequestParams, QueryStringParams = RequestParams>(
    endpoint: string,
    options: MakeRequestOptions<JSONParams, QueryStringParams>,
  ): Promise<Data> {
    return await this.makeRequest<Data, JSONParams, QueryStringParams>(RESTMethods.Post, endpoint, options);
  }

  async put<Data, JSONParams = RequestParams, QueryStringParams = RequestParams>(
    endpoint: string,
    options: MakeRequestOptions<JSONParams, QueryStringParams>,
  ): Promise<Data> {
    return await this.makeRequest<Data, JSONParams, QueryStringParams>(RESTMethods.Put, endpoint, options);
  }
}

/**
 * @public
 */
export interface MakeRequestOptions<JSONParams = RequestParams, QueryStringParams = RequestParams> {
  includeAuthorization?: boolean;
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
export type RequestParams = Record<string, boolean | number | string>;

/**
 * @public
 */
export type CreateHeadersOptions = Pick<MakeRequestOptions, "includeAuthorization" | "reason">;

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
