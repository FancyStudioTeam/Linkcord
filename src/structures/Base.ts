import type { Client } from "#client/index.js";
import type { RESTManager } from "#rest/index.js";
import type { APIManager } from "#rest/structures/APIManager.js";

/** Represents a base class for some Discord structures. */
export class Base {
	/** The client that instantiated the base. */
	protected readonly client: Client;
	/** The REST manager to perform requests within the API. */
	protected readonly rest: RESTManager;

	/**
	 * Creates a new {@link Base | `Base`} instance.
	 * @param client - The client that instantiated the base.
	 */
	constructor(client: Client) {
		const { rest } = client;

		this.client = client;
		this.rest = rest;
	}

	/** The API manager to perform requests within the API. */
	protected get api(): APIManager {
		const { rest } = this;
		const { api } = rest;

		return api;
	}

	/** Clones the current instance. */
	protected clone(): this {
		const createdObject = Object.create(this);

		return Object.assign(createdObject, this);
	}
}
