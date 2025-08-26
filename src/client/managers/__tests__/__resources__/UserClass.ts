/** Represents a user class for testing purposes. */
export class UserClass {
	/** The name of the user. */
	name: string;

	/**
	 * Creates a new {@link UserClass | `UserClass`} instance.
	 * @param name - The name of the user.
	 */
	constructor(name: string) {
		this.name = name;
	}

	/**
	 * Patches the {@link UserClass | `UserClass`} instance with the given data.
	 * @param data - The data to use when patching the user.
	 */
	protected __patch__(data: Partial<UserClassData> = {}): void {
		const { name } = data;

		if (name) {
			this.name = name;
		}
	}
}

/** The available data to patch from a {@link UserClass | `UserClass`} instance. */
interface UserClassData {
	/** The name of the user. */
	name: string;
}
