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
	 * Patches the base properties with the given data.
	 *
	 * @param data - The data to use when patching the base properties.
	 *
	 * @internal
	 */
	protected abstract _patch(data: unknown): void;

	/**
	 * Converts the {@link Base | `Base`} instance to a JSON object.
	 */
	abstract toJSON(): unknown;
}
