import type { Newable } from "#utils/types/Util.js";

/**
 * Throws an exception in an inline expression.
 * @param message - The message of the `Error` instance.
 *
 * @group Utils/Functions
 */
export function exception(message: string): never;

/**
 * Throws an exception in an inline expression.
 *
 * @param error - The class to use to instantiate the error.
 * @param message The message of the `Error` instance.
 *
 * @group Utils/Functions
 */
export function exception<ErrorConstructor extends Newable<Error>>(error: ErrorConstructor, message: string): never;

/**
 * Throws an exception in an inline expression.
 *
 * @param errorOrMessage - The class to use to instantiate the error or the message of the `Error` instance.
 * @param possibleMessage - The message of the `Error` instance, if any.
 *
 * @group Utils/Functions
 */
export function exception(errorOrMessage: Newable<Error> | string, possibleMessage?: string): never {
	if (typeof errorOrMessage === "function") {
		if (typeof possibleMessage !== "string") {
			throw new TypeError("Second parameter (message) from 'exception' must be a string");
		}

		throw new errorOrMessage(possibleMessage);
	}

	if (typeof errorOrMessage !== "string") {
		throw new TypeError("First parameter (message) from 'exception' must be a string");
	}

	throw new Error(errorOrMessage);
}
