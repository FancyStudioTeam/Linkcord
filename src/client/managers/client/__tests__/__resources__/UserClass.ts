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
		super(null);

		this.name = name;
	}

	/**
	 * Patches the user with the given data.
	 * @param data - The data to use when patching the user.
	 */
	_patch(data: Partial<UserClassData> = {}): void {
		const { name } = data;

		if (name) {
			this.name = name;
		}
	}
}

/**
 * Represents the available data to patch from a user.
 * @internal
 */
interface UserClassData {
	/**
	 * The name of the user.
	 */
	name: string;
}
