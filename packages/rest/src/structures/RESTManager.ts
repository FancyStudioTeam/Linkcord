import { EventEmitter } from "node:events";
import { replaceBotPrefix } from "@fancystudioteam/linkcord-utils";
import { REST_VERSION } from "../utils/constants.js";
import { InviteREST } from "./InviteREST.js";
import { PollREST } from "./PollREST.js";
import { SKUREST } from "./SKUREST.js";
import { SoundboardREST } from "./SoundboardREST.js";
import { VoiceREST } from "./VoiceREST.js";

/**
 * @public
 */
export class RESTManager extends EventEmitter<RESTManagerEvents> {
  readonly invite = new InviteREST(this);
  readonly options: RESTManagerOptions;
  readonly poll = new PollREST(this);
  readonly sku = new SKUREST(this);
  readonly soundboard = new SoundboardREST(this);
  readonly token: string;
  readonly voice = new VoiceREST(this);

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

  async delete<Data>(endpoint: string, options?: MakeRequestOptions<never, never>): Promise<Data> {
    return await this._makeRequest<Data, never, never>(RESTMethods.Delete, endpoint, options);
  }

  async get<Data, QueryStringParams = never>(
    endpoint: string,
    options?: MakeRequestOptions<never, QueryStringParams>,
  ): Promise<Data> {
    return await this._makeRequest<Data, never, QueryStringParams>(RESTMethods.Get, endpoint, options);
  }

  async patch<Data, JSONParams = never>(
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, never>,
  ): Promise<Data> {
    return await this._makeRequest<Data, JSONParams, never>(RESTMethods.Patch, endpoint, options);
  }

  async post<Data, JSONParams = never>(
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, never>,
  ): Promise<Data> {
    return await this._makeRequest<Data, JSONParams, never>(RESTMethods.Post, endpoint, options);
  }

  async put<Data, JSONParams = never>(
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, never>,
  ): Promise<Data> {
    return await this._makeRequest<Data, JSONParams, never>(RESTMethods.Put, endpoint, options);
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
