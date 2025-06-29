import type { Client } from "#client/Client.js";
import { REST_URL_BASE, USER_AGENT } from "#rest/utils/constants.js";

/**
 * @public
 */
export class RESTManager {
    readonly client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    get token(): Readonly<string> {
        const { client } = this;
        const { token } = client;

        return token;
    }

    /**
     * @internal
     */
    protected createRequestHeaders(options: CreateRequestHeadersOptions): Headers {
        const { token } = this;
        const { contentType, reason, withAuthorization } = options;
        const headers = new Headers();

        headers.set("User-Agent", USER_AGENT);

        if (withAuthorization) {
            headers.set("Authorization", `Bot ${token}`);
        }

        if (contentType) {
            headers.set("Content-Type", contentType);
        }

        if (reason) {
            headers.set("X-Audit-Log-Reason", reason);
        }

        return headers;
    }

    /**
     * @internal
     */
    protected createRequestInit(
        method: RESTMethods,
        options: CreateRequestInitOptions,
    ): RequestInit {
        const headers = this.createRequestHeaders(options);
        const data: RequestInit = {
            headers,
            method,
        };

        return data;
    }

    /**
     * @internal
     */
    protected createRequestURL(endpoint: string, queryStringParams?: QueryStringParams): string {
        const urlObject = new URL(endpoint, REST_URL_BASE);
        const { searchParams } = urlObject;

        if (typeof queryStringParams === "object") {
            for (const [key, value] of Object.entries(queryStringParams)) {
                searchParams.append(key, value.toString());
            }
        }

        return urlObject.toString();
    }

    async makeRequest<Result>(
        method: RESTMethods,
        endpoint: string,
        options: MakeRequestOptions,
    ): Promise<Result> {
        const { queryStringParams } = options;
        const init = this.createRequestInit(method, options);
        const url = this.createRequestURL(endpoint, queryStringParams);
        const request = await fetch(url, init);

        return (await request.json()) as Promise<Result>;
    }
}

/**
 * @public
 */
export interface MakeRequestOptions {
    contentType?: "application/json" | "application/x-www-form-urlencoded" | "multipart/form-data";
    queryStringParams: QueryStringParams;
    reason?: string;
    withAuthorization?: boolean;
}

/**
 * @internal
 */
type CreateRequestInitOptions = MakeRequestOptions;

/**
 * @internal
 */
type CreateRequestHeadersOptions = Pick<
    MakeRequestOptions,
    "contentType" | "reason" | "withAuthorization"
>;

/**
 * @public
 */
export type QueryStringParams = Record<string, boolean | number | string>;

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
