/**
 * Represents the options to use when making Discord API requests.
 *
 * @typeParam JSONParams - The shape of the JSON data to send with the request.
 * @typeParam QueryStringParams - The shape of the query string parameters to append to the request URL.
 * @group REST/Interfaces
 */
export interface MakeRequestOptions<JSONParams = unknown, QueryStringParams = unknown> {
	/** The content type of the request. */
	contentType?: RESTContentTypes;
	/** The JSON data to send in the request. */
	json?: JSONParams;
	/** The query string parameters to append to the requested URL. */
	queryString?: QueryStringParams;
	/** The reason to use in the `X-Audit-Log-Reason` header for Discord audit logs. */
	reason?: string;
	/** Whether to include the `Authorization` header in the request. */
	withAuthorization?: boolean;
}

/**
 * Represents the content types that can be used when making Discord API requests.
 * @group REST/Enums
 */
export enum RESTContentTypes {
	ApplicationJSON = "application/json",
	ApplicationXWWWFormURLEncoded = "application/x-www-form-urlencoded",
	MultipartFormData = "multipart/form-data",
}

/**
 * Represents the HTTP methods that can be used when making Discord API requests.
 * @group REST/Enums
 */
export enum RESTMethods {
	Delete = "DELETE",
	Get = "GET",
	Patch = "PATCH",
	Post = "POST",
	Put = "PUT",
}
