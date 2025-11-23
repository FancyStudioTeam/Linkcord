import type { Client } from "#client/index.js";
import type { RESTManager } from "#rest/index.js";
import type { APIManager } from "#rest/structures/APIManager.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";

export abstract class Base {
	protected declare readonly client: Client;
	protected declare readonly rest: RESTManager;

	constructor(client: Client) {
		const { rest } = client;

		defineImmutableProperty(this, "client", client);
		defineImmutableProperty(this, "rest", rest);
	}

	protected get api(): APIManager {
		const { rest } = this;
		const { api } = rest;

		return api;
	}

	protected clone(): this {
		return Object.assign(Object.create(this), this);
	}

	protected abstract patch(data: unknown): void;
}
