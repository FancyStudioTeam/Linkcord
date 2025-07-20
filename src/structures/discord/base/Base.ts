import type { Client } from "#client/Client.js";
import type { RESTManager } from "#rest/index.js";

/**
 * Represents a base class for most of the structures.
 *
 * @public
 */
export abstract class Base {
	/**
	 * The client that instantiated the base.
	 */
	readonly client: Client;
	/**
	 *  The REST manager to perform requests within the extended classes.
	 */
	protected readonly rest: RESTManager;

	constructor(client: Client) {
		const { rest } = client;

		this.client = client;
		this.rest = rest;
	}

	/**
	 * Converts the base to a JSON object.
	 */
	abstract toJSON(): unknown;
}
