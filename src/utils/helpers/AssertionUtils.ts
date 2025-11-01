/** Static utility class that provides runtime type assertions and type narrowing helpers. */
export class AssertionUtils {
	/**
	 * Determines whether the provided input is a function.
	 *
	 * @param input - The input to check.
	 */
	// biome-ignore lint/complexity/noBannedTypes: Expect input to be any kind of function.
	static isFunction(input: unknown): input is Function {
		return typeof input === "function";
	}

	/**
	 * Determines whether the provided input is an object.
	 *
	 * @param input - The input to check.
	 */
	static isObject(input: unknown): input is object {
		return typeof input === "object" && input !== null;
	}

	/**
	 * Determines whether the provided input is a string.
	 *
	 * @param input - The input to check.
	 */
	static isString(input: unknown): input is string {
		return typeof input === "string";
	}
}
