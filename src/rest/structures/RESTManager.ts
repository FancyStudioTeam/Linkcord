import type { Client } from "#client";
import { RESTError } from "#errors";
import type { APIVersion, JSONErrorCodes } from "#types";
import { MiscellaneousRESTManager } from "./MiscellaneousRESTManager.js";
import { UsersRESTManager } from "./UsersRESTManager.js";

export class RESTManager {
  readonly client: Client;
  readonly miscellaneous: MiscellaneousRESTManager;
  readonly token: string;
  readonly users: UsersRESTManager;
  readonly version: RESTVersion;

  constructor(client: Client, options: CreateRESTManagerOptions) {
    let { token, version } = options;

    version ??= 10;

    this.client = client;
    this.miscellaneous = new MiscellaneousRESTManager(client);
    this.token = token;
    this.users = new UsersRESTManager(client);
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
    headers.set("User-Agent", "Linkcord (https://github.com/FancyStudioTeam/Linkcord)");

    if (includeAuthorization) {
      headers.set("Authorization", `Bot ${token}`);
    }

    return headers;
  }

  private _getAPIUrl(): string {
    const { version } = this;
    const url = `https://discord.com/api/v${version}`;

    return url;
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
    const apiUrl = this._getAPIUrl();
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
   * @throws {RESTError} When the request fails.
   */
  async makeRequest<Data, JSONParams = unknown>(
    method: RESTMethod,
    path: string,
    options: MakeRequestOptions<JSONParams> = {
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
      const response = (await request.json()) as ErrorResponse;

      throw new RESTError(`Request failed with status code "${status}".`, {
        response,
        statusCode: status,
        url: requestUrl,
      });
    }

    const data = (await request.json()) as Data;

    return data;
  }
}

export interface CreateRESTManagerOptions {
  token: string;
  version?: APIVersion;
}

interface ErrorResponse {
  code: JSONErrorCodes;
  message: string;
}

interface MakeRequestOptions<JSONParams> {
  json?: JSONParams;
  useAuthorization?: boolean;
}

export enum RESTMethod {
  Delete = "DELETE",
  Get = "GET",
  Patch = "PATCH",
  Post = "POST",
  Put = "PUT",
}

export type RESTVersion = APIVersion;
