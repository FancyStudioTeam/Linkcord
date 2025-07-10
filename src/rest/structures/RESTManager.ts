import { UsersAPI } from "#api/UsersAPI.js";
import type { Client } from "#client/Client.js";
import { Endpoints } from "#rest/endpoints/Endpoints.js";
import { REST_URL_BASE, USER_AGENT } from "#rest/utils/constants.js";
import type { RESTGetGateway } from "#types/index.js";

/**
 * @public
 */
export class RESTManager {
	readonly client: Client;
	readonly users = new UsersAPI(this);

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
	protected createRequestHeaders(options?: CreateRequestHeadersOptions): Headers {
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
	protected createRequestInit(
		method: RESTMethods,
		options?: CreateRequestInitOptions,
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
	protected createRequestURL<QueryStringParams>(
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
		const { queryString } = options ?? {};

		const init = this.createRequestInit(method, options);
		const url = this.createRequestURL<QueryStringParams>(endpoint, queryString);

		const request = await fetch(url, init);

		return (await request.json()) as Promise<Result>;
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
