export interface MakeRequestOptions<JSONParams = unknown, QueryStringParams = unknown> {
	contentType?: RESTContentType;
	json?: JSONParams;
	queryString?: QueryStringParams;
	reason?: string;
	withAuthorization?: boolean;
}

export enum RESTContentType {
	ApplicationJSON = "application/json",
	ApplicationXWWWFormURLEncoded = "application/x-www-form-urlencoded",
	MultipartFormData = "multipart/form-data",
}

export enum RESTMethod {
	Delete = "DELETE",
	Get = "GET",
	Patch = "PATCH",
	Post = "POST",
	Put = "PUT",
}
