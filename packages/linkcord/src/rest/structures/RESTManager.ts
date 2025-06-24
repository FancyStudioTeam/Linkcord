import { EventEmitter } from "node:events";
import { replaceBotPrefix } from "@fancystudioteam/linkcord-utils";
import { REST_VERSION } from "../utils/constants.js";
import { RESTRequestError } from "../utils/errors/RESTRequestError.js";
import { Applications } from "./api/Applications.js";
import { Channels } from "./api/Channels.js";
import { Guild } from "./api/Guilds.js";
import { Invites } from "./api/Invites.js";
import { Lobbies } from "./api/Lobbies.js";
import { Miscellaneous } from "./api/Miscellaneous.js";
import { Monetization } from "./api/Monetization.js";
import { Users } from "./api/Users.js";
import { Webhooks } from "./api/Webhooks.js";
import {
  type CreateHeadersOptions,
  type CreateRequestData,
  type CreateRequestDataOptions,
  type RESTManagerEventsMap,
  type RESTManagerOptions,
  RESTMethods,
  type RequestFile,
} from "./types/RESTManager.js";

/**
 * @public
 */
export class RESTManager extends EventEmitter<RESTManagerEventsMap> {
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
  private createRequestBody(json?: unknown, files?: RequestFile[]): BodyInit {
    /**
     * Check whether the request has files.
     *
     * If it does, the request should be sent as a `multipart/form-data`
     * request.
     *
     * @see https://discord.com/developers/docs/reference#uploading-files
     */
    const isMultipart = files && files.length > 0;

    if (isMultipart) {
      const formData = new FormData();

      for (const file of files) {
        const { blob, fileName, id } = file;

        /**
         * Files must be appended to the `FormData` using the `files[n]`
         * syntax with its `Blob` value and file name.
         */
        formData.append(`files[${id}]`, blob, fileName);
      }

      return formData;
    }

    return JSON.stringify(json);
  }

  /**
   * @internal
   */
  private createRequestData<JSONParams = never, QueryStringParams = never>(
    method: RESTMethods,
    endpoint: string,
    options: CreateRequestDataOptions<JSONParams, QueryStringParams>,
  ): CreateRequestData {
    const { files, includeAuthorization, json, query, reason } = options;
    /**
     * Check whether the request has files.
     *
     * If it does, the request should be sent as a `multipart/form-data`
     * request.
     *
     * @see https://discord.com/developers/docs/reference#uploading-files
     */
    const isMultipart = files && files.length > 0;
    const headers = this.createRequestHeaders({
      contentType: isMultipart ? "multipart/form-data" : "application/json",
      includeAuthorization,
      reason,
    });
    const url = this.createRequestUrl(endpoint, query);
    const bodyInit = this.createRequestBody(json, files);
    const requestInit: RequestInit = {
      body: bodyInit,
      headers,
      method,
    };

    return {
      init: requestInit,
      url: url.toString(),
    };
  }

  /**
   * @internal
   */
  private createRequestHeaders(options?: CreateHeadersOptions): Headers {
    const { token } = this;
    const { contentType, includeAuthorization, reason } = options ?? {};
    const headers = new Headers();

    headers.set("User-Agent", "Linkcord");
    headers.set("Content-Type", contentType ?? "application/json");

    if (reason) {
      headers.set("X-Audit-Log-Reason", reason);
    }

    if (includeAuthorization) {
      headers.set("Authorization", `Bot ${token}`);
    }

    return headers;
  }

  /**
   * @internal
   */
  private createRequestUrl<QueryStringParams = never>(endpoint: string, query?: QueryStringParams): string {
    const url = new URL(`${RESTManager.DISCORD_API_URL}/${endpoint}`);
    const { searchParams } = url;

    if (query && typeof query === "object") {
      for (const [key, value] of Object.entries(query)) {
        searchParams.append(key, value.toString());
      }
    }

    return url.toString();
  }

  /**
   * @internal
   */
  /**
   * TODO: Implement ratelimit manager.
   */
  private async makeRequest<Data, JSONParams = never, QueryStringParams = never, FormParams = never>(
    method: RESTMethods,
    endpoint: string,
    options?: MakeRequestOptions<JSONParams, QueryStringParams, FormParams>,
  ): Promise<Data> {
    const { json, reason, files, includeAuthorization } = options ?? {};
    const { init, url } = this.createRequestData(method, endpoint, {
      files,
      includeAuthorization: includeAuthorization ?? true,
      json,
      reason,
    });
    const request = await fetch(url, init);
    const { status, statusText, headers } = request;

    this.emit("request", {
      endpoint,
      headers,
      method,
      status,
      statusText,
      url,
    });

    if (!request.ok) {
      const errorMessageObject = await request.json();
      const { message, code } = errorMessageObject;

      throw new RESTRequestError(message, code, method, url);
    }

    if (status === 204) {
      return undefined as Data;
    }

    const isImage = headers.get("Content-Type")?.startsWith("image/") ?? false;

    if (status === 200 && isImage) {
      const blob = await request.blob();

      return blob as Data;
    }

    const data = (await request.json()) as Data;

    return data;
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
    options: MakeRequestOptions<JSONParams, QueryStringParams, FormParams>,
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
  files?: RequestFile[];
}
