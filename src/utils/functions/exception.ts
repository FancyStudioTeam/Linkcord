/**
 * Throws an exception in inline expressions.
 * @param exception - The string message or `Error` instance to throw.
 *
 * @typeParam Exception - The inferred type from the `exception` parameter.
 * @group Utils/Functions
 */
export function exception<Exception extends Error | string>(exception: Exception): never {
	if (typeof exception === "string") {
		throw new Error(exception);
	}

	throw exception;
}
