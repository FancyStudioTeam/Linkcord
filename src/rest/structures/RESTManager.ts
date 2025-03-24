import type { Client } from "#client";
import { RequestError } from "#errors";
import { type CreateRestManagerOptions, type MakeRequestOptions, RESTMethod, type RESTVersion } from "#types";
import { ChannelsREST } from "./ChannelsREST.js";
import { MiscellaneousREST } from "./MiscellaneousREST.js";

export class RESTManager {
  protected _client: Client;
  /** The Discord REST API url. */
  readonly apiUrl: string;
  /** The channels REST manager. */
  readonly channels = new ChannelsREST(this);
  /** The miscellaneous REST manager. */
  readonly miscellaneous = new MiscellaneousREST(this);
  /** The client token. */
  readonly token: string;
  /** The Discord REST API version. */
  readonly version: RESTVersion;

  constructor(client: Client, options: CreateRestManagerOptions) {
    let { token, version } = options;

    version ??= 10;

    this._client = client;
    this.apiUrl = `https://discord.com/api/v${version}`;
    this.token = token;
    this.version = version;
  }

  /**
   * Gets the default headers to use in the request.
   *
   * @param includeAuthorization - Whether to include the authorization header.
   *
   * @returns The created headers object.
   */
  private _getDefaultHeaders(includeAuthorization = true): Headers {
    const headers = new Headers();
    const { token } = this;

    headers.set("Content-Type", "application/json");

    if (includeAuthorization) {
      headers.set("Authorization", `Bot ${token}`);
    }

    return headers;
  }

  /**
   * Gets the request initialization object to use in the request.
   *
   * @param method - The method to use.
   * @param useAuthorization - Whether the request needs authentication.
   * @param body - The data to send in the request body.
   *
   * @returns The created request initialization object.
   */
  private _getRequestInitObject(method: RESTMethod, useAuthorization = true, body?: unknown): RequestInit {
    const headers = this._getDefaultHeaders(useAuthorization);
    const requestInit: RequestInit = {
      headers,
      method,
    };

    if (![RESTMethod.Get, RESTMethod.Delete].includes(method)) {
      requestInit.body = JSON.stringify(body);
    }

    return requestInit;
  }

  /**
   * Gets the request url to use in the request.
   *
   * @param path - The path to create the request url for.
   *
   * @returns The created request url.
   */
  private _getRequestUrl(path: string): string {
    const { apiUrl } = this;
    const requestUrl = `${apiUrl}${path}`;

    return requestUrl;
  }

  /**
   * Creates a request to the Discord REST API.
   *
   * @param method - The request method to use.
   * @param path - The path to create the request to.
   * @param body - The data to send in the request body.
   *
   * @returns The request data object.
   *
   * @throws {RequestError} When the request fails.
   */
  async makeRequest<Data>(
    method: RESTMethod,
    path: string,
    options: MakeRequestOptions = {
      json: undefined,
      useAuthorization: true,
    },
  ): Promise<Data> {
    const { json, useAuthorization } = options;
    const requestUrl = this._getRequestUrl(path);
    const requestInit = this._getRequestInitObject(method, useAuthorization, json);
    const request = await fetch(requestUrl, requestInit);
    const { ok, status } = request;

    if (!ok) {
      throw new RequestError(`Request failed with status code ${status}.`, status);
    }

    const data = (await request.json()) as Data;

    return data;
  }
}
