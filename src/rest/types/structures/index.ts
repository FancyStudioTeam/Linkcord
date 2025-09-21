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
	/** The JSON data to send with the request. */
	json?: JSONParams;
	/** The query string parameters to append to the request URL. */
	queryString?: QueryStringParams;
	/** The reason for the request. Used for audit logs. */
	reason?: string;
	/** Whether to include the authorization header in the request. */
	withAuthorization?: boolean;
}

/**
 * Represents the content types that can be used when making requests.
 * @group REST/Enums
 */
export enum RESTContentTypes {
	ApplicationJSON = "application/json",
	ApplicationXWWWFormURLEncoded = "application/x-www-form-urlencoded",
	MultipartFormData = "multipart/form-data",
}

/**
 * Represents the HTTP methods that can be used when making requests.
 * @group REST/Enums
 */
export enum RESTMethods {
	Delete = "DELETE",
	Get = "GET",
	Patch = "PATCH",
	Post = "POST",
	Put = "PUT",
}
