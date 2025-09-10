import type { Client } from "#client/index.js";
import type { RESTManager } from "#rest/index.js";
import type { APIManager } from "#rest/structures/APIManager.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";

/** Represents a base class for some Discord structures. */
export abstract class Base {
	/** The client that instantiated the base. */
	protected declare readonly client: Client;
	/** The REST manager to perform requests within the API. */
	protected declare readonly rest: RESTManager;

	/**
	 * Creates a new {@link Base | `Base`} instance.
	 * @param client - The client that instantiated the base.
	 */
	constructor(client: Client) {
		const { rest } = client;

		defineImmutableProperty(this, "client", client);
		defineImmutableProperty(this, "rest", rest);
	}

	/** The API manager to perform requests within the API. */
	protected get api(): APIManager {
		const { rest } = this;
		const { api } = rest;

		return api;
	}

	/**
	 * Clones the current {@link Base | `Base`} instance.
	 * @returns The cloned {@link Base | `Base`} instance.
	 */
	protected clone(): this {
		const createdObject = Object.create(this);

		return Object.assign(createdObject, this);
	}

	/** Patches the current {@link Base | `Base`} instance with the given data. */
	protected abstract patch(data: unknown): void;
}
