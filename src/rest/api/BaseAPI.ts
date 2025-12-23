import type { Client } from "#client/index.js";
import type { RESTManager } from "#rest/structures/RESTManager.js";
import { defineReadonlyProperty } from "#utils/functions/defineReadonlyProperty.js";

export class BaseAPI {
	protected declare readonly client: Client;
	protected declare readonly rest: RESTManager;

	constructor(rest: RESTManager, client: Client) {
		defineReadonlyProperty(this, "client", client);
		defineReadonlyProperty(this, "rest", rest);
	}
}
