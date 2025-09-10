import type { Client } from "#client/index.js";
import type { RESTManager } from "#rest/index.js";
import type { APIManager } from "#rest/structures/APIManager.js";
import type { APIUser } from "#types/index.js";
import { defineImmutableProperty } from "#utils/functions/defineImmutableProperty.js";
import { User } from "./User.js";

/**
 * Represents a base class for all Discord structures.
 * @group Structures/Classes
 */
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

	/**
	 * Patches the given user data into a {@link User | `User`} instance.
	 *
	 * @param userData - The {@link APIUser | `APIUser`} data to patch.
	 * @returns The updated or created {@link User | `User`} instance.
	 */
	protected patchUser(userData: APIUser): User {
		const { client } = this;
		const { users } = client;

		const { id: userId } = userData;
		const existingUser = users.get(userId);

		if (existingUser) {
			// biome-ignore lint/complexity/useLiteralKeys: "patch" is a protected method.
			existingUser["patch"](userData);

			return existingUser;
		}

		const user = new User(client, userData);

		users.set(userId, user);

		return user;
	}
}
