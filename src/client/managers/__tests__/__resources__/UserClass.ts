import { Base } from "#structures/index.js";

/**
 * Represents a user class for testing purposes.
 * @internal
 */
// @ts-expect-error
export class UserClass extends Base {
	/**
	 * The name of the user.
	 */
	name: string;

	/**
	 * Creates a new {@link UserClass | `UserClass`} instance.
	 * @param name - The name of the user.
	 */
	constructor(name: string) {
		// @ts-expect-error
		super(null);

		this.name = name;
	}

	/**
	 * Patches the {@link UserClass | `UserClass`} instance with the given
	 * data.
	 * @param data - The data to use when patching the user.
	 * @internal
	 */
	protected _patch(data: Partial<UserClassData> = {}): void {
		const { name } = data;

		if (name) {
			this.name = name;
		}
	}
}

/**
 * The available data to patch from a {@link UserClass | `UserClass`}
 * instance.
 * @internal
 */
interface UserClassData {
	/**
	 * The name of the user.
	 */
	name: string;
}
