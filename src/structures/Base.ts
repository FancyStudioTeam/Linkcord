import type { Client } from '#client/index.js';
import type { RESTManager } from '#rest/index.js';
import { defineReadonlyProperty } from '#utils/functions/defineReadonlyProperty.js';

export abstract class Base {
	protected declare readonly client: Client;
	protected declare readonly rest: RESTManager;

	constructor(client: Client) {
		const { rest } = client;

		defineReadonlyProperty(this, 'client', client);
		defineReadonlyProperty(this, 'rest', rest);
	}

	protected clone(): this {
		return Object.assign(Object.create(this), this);
	}

	protected abstract patch(data: unknown): void;
}
