import type { Client } from "#client/index.js";
import type { RESTManager } from "#rest/index.js";
import type { APIManager } from "#rest/structures/APIManager.js";

/**
 * The base class for most of Discord structures.
 * @group Discord/Structures
 * @public
 */
export abstract class Base {
	/**
	 * The client that instantiated the base.
	 */
	protected readonly client: Client;
	/**
	 *  The REST manager to perform requests within the extended classes.
	 */
	protected readonly rest: RESTManager;

	/**
	 * Creates a new {@link Base | `Base`} instance.
	 * @param client - The client that instantiated the extended class.
	 */
	constructor(client: Client) {
		const { rest } = client;

		this.client = client;
		this.rest = rest;
	}

	/**
	 * Gets the API manager of the REST manager.
	 * @internal
	 */
	protected get _api(): APIManager {
		const { rest } = this;
		const { api } = rest;

		return api;
	}

	/**
	 * Clones the current {@link Base | `Base`} instance.
	 * @returns The cloned {@link Base | `Base`} instance.
	 * @internal
	 */
	// protected abstract _clone(): this;

	/** Clones the current {@link Base | `Base`} instance. */
	protected __cloneThis__(): this {
		const createdObject = Object.create(this);

		return Object.assign(createdObject, this);
	}

	/** Patches the {@link Base | `Base`} instance with the given data. */
	protected abstract __patch__(data: unknown): void;

	/** Converts the {@link Base | `Base`} instance to a JSON object. */
	abstract toJSON(): unknown;
}
