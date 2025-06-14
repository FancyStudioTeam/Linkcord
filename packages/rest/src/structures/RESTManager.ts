import { EventEmitter } from "node:events";
import { replaceBotPrefix } from "@fancystudioteam/linkcord-utils";
import { REST_VERSION } from "../utils/constants.js";
import { Applications } from "./api/Applications.js";
import { Channels } from "./api/Channels.js";
import { Guild } from "./api/Guilds.js";
import { Invites } from "./api/Invites.js";
import { Lobbies } from "./api/Lobbies.js";
import { Miscellaneous } from "./api/Miscellaneous.js";
import { Monetization } from "./api/Monetization.js";
import { Users } from "./api/Users.js";
import { Webhooks } from "./api/Webhooks.js";

/**
 * @public
 */
export class RESTManager extends EventEmitter<RESTManagerEvents> {
  readonly applications = new Applications(this);
  readonly channels = new Channels(this);
  readonly guilds = new Guild(this);
  readonly invites = new Invites(this);
  readonly lobbies = new Lobbies(this);
  readonly miscellaneous = new Miscellaneous(this);
  readonly monetization = new Monetization(this);
  readonly token: string;
  readonly users = new Users(this);
  readonly webhooks = new Webhooks(this);

  constructor(options: RESTManagerOptions) {
    super();

    const { token } = options;

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
  private async makeRequest<Data, JSONParams = never, QueryStringParams = never, FormParams = never>(
    method: RESTMethods,
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, QueryStringParams, FormParams>,
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

  async delete<Data, QueryStringParams = never>(
    endpoint: string,
    options?: MakeRequestOptions<never, QueryStringParams>,
  ): Promise<Data> {
    return await this.makeRequest<Data, never, QueryStringParams, never>(RESTMethods.Delete, endpoint, options);
  }

  async get<Data, QueryStringParams = never>(
    endpoint: string,
    options?: MakeRequestOptions<never, QueryStringParams>,
  ): Promise<Data> {
    return await this.makeRequest<Data, never, QueryStringParams, never>(RESTMethods.Get, endpoint, options);
  }

  async patch<Data, JSONParams = never, QueryStringParams = never>(
    endpoint: string,
    options: MakeRequestOptions<JSONParams, QueryStringParams>,
  ): Promise<Data> {
    return await this.makeRequest<Data, JSONParams, QueryStringParams, never>(RESTMethods.Patch, endpoint, options);
  }

  async post<Data, JSONParams = never, QueryStringParams = never, FormParams = never>(
    endpoint: string,
    options: MakeRequestOptions<JSONParams, QueryStringParams>,
  ): Promise<Data> {
    return await this.makeRequest<Data, JSONParams, QueryStringParams, FormParams>(RESTMethods.Post, endpoint, options);
  }

  async put<Data, JSONParams = never, QueryStringParams = never>(
    endpoint: string,
    options: MakeRequestOptions<JSONParams, QueryStringParams, never>,
  ): Promise<Data> {
    return await this.makeRequest<Data, JSONParams, QueryStringParams, never>(RESTMethods.Put, endpoint, options);
  }
}

/**
 * @public
 */
export interface MakeRequestOptions<JSONParams = never, QueryStringParams = never, FormParams = never> {
  form?: FormParams;
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
