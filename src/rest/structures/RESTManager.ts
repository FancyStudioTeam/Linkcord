import type { Client } from "#client/index.js";
import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { HTTP_STATUS_CODES, REST_URL_BASE, USER_AGENT } from "#rest/utils/constants.js";
import type { RESTGetGateway } from "#types/index.js";
import { APIManager } from "./APIManager.js";

const ONE_SECOND_MILLISECONDS = 1_000;

/** The REST manager for the client. */
export class RESTManager {
	readonly api = new APIManager(this);
	readonly client: Client;

	globalRateLimit = false;

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
	private _createRequestHeaders(options?: CreateRequestHeadersOptions): Headers {
		const { token } = this;
		const headers = new Headers();

		let { contentType, reason, withAuthorization } = options ?? {};

		contentType ??= RESTContentTypes.ApplicationJSON;
		withAuthorization ??= true;

		headers.set("User-Agent", USER_AGENT);
		headers.set("Content-Type", contentType);

		if (withAuthorization) {
			headers.set("Authorization", `Bot ${token}`);
		}

		if (reason) {
			headers.set("X-Audit-Log-Reason", reason);
		}

		return headers;
	}

	/**
	 * @internal
	 */
	private _createRequestInit(
		method: RESTMethods,
		options?: CreateRequestInitOptions,
	): RequestInit {
		const headers = this._createRequestHeaders(options);
		const data: RequestInit = {
			headers,
			method,
		};

		return data;
	}

	/**
	 * @internal
	 */
	private _createRequestURL<QueryStringParams>(
		endpoint: string,
		queryStringParams?: QueryStringParams,
	): string {
		const urlObject = new URL(endpoint, REST_URL_BASE);
		const { searchParams } = urlObject;

		if (queryStringParams && typeof queryStringParams === "object") {
			for (const [key, value] of Object.entries(queryStringParams)) {
				searchParams.append(key, String(value));
			}
		}

		return urlObject.toString();
	}

	async delete<Result, QueryStringParams = never>(
		endpoint: string,
		options?: RESTDeleteOptions<QueryStringParams>,
	): Promise<Result> {
		return await this.makeRequest<Result, never, QueryStringParams>(
			RESTMethods.Delete,
			endpoint,
			options,
		);
	}

	async get<Result, QueryStringParams = never>(
		endpoint: string,
		options?: RESTGetOptions<QueryStringParams>,
	): Promise<Result> {
		return await this.makeRequest<Result, never, QueryStringParams>(
			RESTMethods.Get,
			endpoint,
			options,
		);
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway
	 */
	async getGateway<Result = RESTGetGateway>(): Promise<Result> {
		return await this.makeRequest<Result>(RESTMethods.Get, Endpoints.gateway(), {
			withAuthorization: false,
		});
	}

	/**
	 * @see https://discord.com/developers/docs/events/gateway#get-gateway-bot
	 */
	async getGatewayBot<Result = RESTGetGateway>(): Promise<Result> {
		return await this.makeRequest<Result>(RESTMethods.Get, Endpoints.gatewayBot());
	}

	async makeRequest<Result, JSONParams = never, QueryStringParams = never>(
		method: RESTMethods,
		endpoint: string,
		options?: MakeRequestOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		const { globalRateLimit } = this;

		if (globalRateLimit) {
			throw new Error("You are being rate limited.");
		}

		const { queryString } = options ?? {};

		const init = this._createRequestInit(method, options);
		const url = this._createRequestURL<QueryStringParams>(endpoint, queryString);

		const request = await fetch(url, init);
		const { headers, status } = request;

		const isRateLimited = status === HTTP_STATUS_CODES.TOO_MANY_REQUESTS;
		const isNoContent = status === HTTP_STATUS_CODES.NO_CONTENT;

		if (isRateLimited) {
			const isGlobalRateLimit = headers.has("X-RateLimit-Global");
			const rateLimitResetAfter = headers.get("X-RateLimit-Reset-After");

			if (isGlobalRateLimit) {
				this.globalRateLimit = true;

				setTimeout(() => {
					this.globalRateLimit = false;
				}, Number(rateLimitResetAfter) * ONE_SECOND_MILLISECONDS);
			} else {
				setTimeout(
					async () => await this.makeRequest(method, endpoint, options),
					Number(rateLimitResetAfter) * ONE_SECOND_MILLISECONDS,
				);
			}
		}

		if (isNoContent) {
			return undefined as Result;
		}

		return (await request.json()) as Promise<Result>;
	}

	async patch<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPatchOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		return await this.makeRequest<Result, JSONParams, QueryStringParams>(
			RESTMethods.Patch,
			endpoint,
			options,
		);
	}

	async post<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPostOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		return await this.makeRequest<Result, JSONParams, QueryStringParams>(
			RESTMethods.Post,
			endpoint,
			options,
		);
	}

	async put<Result, JSONParams = never, QueryStringParams = never>(
		endpoint: string,
		options?: RESTPutOptions<JSONParams, QueryStringParams>,
	): Promise<Result> {
		return await this.makeRequest<Result, JSONParams, QueryStringParams>(
			RESTMethods.Put,
			endpoint,
			options,
		);
	}
}

/**
 * @public
 */
export interface MakeRequestOptions<JSONParams = unknown, QueryStringParams = unknown> {
	contentType?: RESTContentTypes;
	json?: JSONParams;
	queryString?: QueryStringParams;
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
export type RESTDeleteOptions<QueryStringParams = never> = MakeRequestOptions<
	never,
	QueryStringParams
>;

/**
 * @public
 */
export type RESTGetOptions<QueryStringParams = never> = MakeRequestOptions<
	never,
	QueryStringParams
>;

/**
 * @public
 */
export type RESTPatchOptions<JSONParams = unknown, QueryStringParams = never> = MakeRequestOptions<
	JSONParams,
	QueryStringParams
>;

/**
 * @public
 */
export type RESTPostOptions<JSONParams = unknown, QueryStringParams = never> = MakeRequestOptions<
	JSONParams,
	QueryStringParams
>;

/**
 * @public
 */
export type RESTPutOptions<JSONParams = unknown, QueryStringParams = never> = MakeRequestOptions<
	JSONParams,
	QueryStringParams
>;

/**
 * @public
 */
export enum RESTContentTypes {
	ApplicationJSON = "application/json",
	ApplicationXWWWFormURLEncoded = "application/x-www-form-urlencoded",
	MultipartFormData = "multipart/form-data",
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
