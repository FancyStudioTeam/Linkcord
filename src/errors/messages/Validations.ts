//  biome-ignore-all lint/style/useNamingConvention: Upper snake case is fine.

/**
 * Shows a message indicating that the input value is an invalid type.
 * @param expectedInputDescription - The description of the expected input.
 * @param expectedType - The expected type of the expected input.
 * @param input - The received input value.
 * @returns The message indicating that the input value is an invalid type.
 * @internal
 */
export function INVALID_INPUT_VALUE_TYPE(
	expectedInputDescription: string,
	expectedType: ExpectedType,
	input: unknown,
): string {
	let receivedInputType = String(typeof input);

	if (input === null) {
		receivedInputType = "null";
	}

	return `Invalid input value type for "${expectedInputDescription}".\nExpected "${expectedType}" but received "${receivedInputType}".`;
}

/**
 * Represents the expected type of an input value.
 * @internal
 */
type ExpectedType =
	| "array"
	| "bigint"
	| "boolean"
	| "function"
	| "number"
	| "object"
	| "string"
	| "symbol"
	| "undefined";
