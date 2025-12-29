export interface File {
	data: Buffer<ArrayBuffer>;
	name: string;
}

export interface MakeMutableRequestOptions<Method extends MutableMethod>
	extends MakeRequestOptionsBase<Method>,
		MakeRequestOptionsWithReason {
	body?: BodyInit;
}

export interface MakeRequestOptionsBase<Method extends RESTMethod> {
	contentType?: RESTContentType;
	method: Method;
	withAuthorization?: boolean;
}

export interface MakeRequestOptionsWithReason {
	reason?: string;
}

export interface RestRequestData {
	method: RESTMethod;
}

export interface RestResponseData {
	statusCode: number;
	statusText: string;
}

export type MakeRequestOptions =
	| MakeDeleteRequestOptions
	| MakeGetRequestOptions
	| MakePatchRequestOptions
	| MakePostRequestOptions
	| MakePutRequestOptions;

export type MakeDeleteRequestOptions = MakeRequestOptionsBase<RESTMethod.Delete> & MakeRequestOptionsWithReason;
export type MakeGetRequestOptions = MakeRequestOptionsBase<RESTMethod.Get>;
export type MakePatchRequestOptions = MakeMutableRequestOptions<RESTMethod.Patch>;
export type MakePostRequestOptions = MakeMutableRequestOptions<RESTMethod.Post>;
export type MakePutRequestOptions = MakeMutableRequestOptions<RESTMethod.Put>;

export type MutableMethod = RESTMethod.Patch | RESTMethod.Post | RESTMethod.Put;

export enum RESTContentType {
	ApplicationJSON = 'application/json',
	ApplicationXWWWFormURLEncoded = 'application/x-www-form-urlencoded',
	MultipartFormData = 'multipart/form-data',
}

export enum RESTMethod {
	Delete = 'DELETE',
	Get = 'GET',
	Patch = 'PATCH',
	Post = 'POST',
	Put = 'PUT',
}
