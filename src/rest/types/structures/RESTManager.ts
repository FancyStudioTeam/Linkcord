export interface BaseMakeRequestOptions<Method extends RESTMethod> {
	method: Method;
	withAuthorization?: boolean;
}

export interface MakeRequestOptionsWithReason {
	reason?: string;
}

export interface MakeBaseMutableRequestOptions<Method extends MutableMethod> extends BaseMakeRequestOptions<Method> {
	body?: BodyInit;
	form?: FormData;
}

export type MakeDeleteRequestOptions = BaseMakeRequestOptions<RESTMethod.Delete> & MakeRequestOptionsWithReason;
export type MakeGetRequestOptions = BaseMakeRequestOptions<RESTMethod.Get>;
export type MakeRequestOptions =
	| MakeDeleteRequestOptions
	| MakeGetRequestOptions
	| MakePatchRequestOptions
	| MakePostRequestOptions
	| MakePutRequestOptions;
export type MakePatchRequestOptions = MakeBaseMutableRequestOptions<RESTMethod.Patch>;
export type MakePostRequestOptions = MakeBaseMutableRequestOptions<RESTMethod.Post>;
export type MakePutRequestOptions = MakeBaseMutableRequestOptions<RESTMethod.Put>;

export type MutableMethod = RESTMethod.Patch | RESTMethod.Post | RESTMethod.Put;

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
