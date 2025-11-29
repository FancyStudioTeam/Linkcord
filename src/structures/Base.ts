import type { Client } from "#client/index.js";
import type { RESTManager } from "#rest/index.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";

export abstract class Base {
	protected declare readonly client: Client;
	protected declare readonly rest: RESTManager;

	constructor(client: Client) {
		const { rest } = client;

		defineImmutableProperty(this, "client", client);
		defineImmutableProperty(this, "rest", rest);
	}

	protected clone(): this {
		return Object.assign(Object.create(this), this);
	}

	protected abstract patch(data: unknown): void;
}
