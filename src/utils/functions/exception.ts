import type { Newable } from "#utils/types/Util.js";

/**
 * Throws an exception in an inline expression.
 *
 * @param message - The message of the exception.
 *
 * @group Utils/Functions
 */
export function exception(message: string): never;

/**
 * Throws an exception in an inline expression.
 *
 * @param errorConstructor - The constructor of the error to use for the exception.
 * @param message - The message of the exception.
 *
 * @typeParam ErrorConstructor - The shape of the constructor of the error.
 *
 * @group Utils/Functions
 */
export function exception<ErrorConstructor extends Newable<Error>>(
	errorConstructor: ErrorConstructor,
	message: string,
): never;

/**
 * Throws an exception in an inline expression.
 *
 * @param errorConstructorOrMessage - The constructor of the error to use for the exception or the message of the exception.
 * @param possibleMessage - The message of the exception, if any.
 *
 * @group Utils/Functions
 */
export function exception(errorConstructorOrMessage: Newable<Error> | string, possibleMessage?: string): never {
	if (typeof errorConstructorOrMessage === "function") {
		if (typeof possibleMessage !== "string") {
			throw new TypeError("Second parameter (message) from 'exception' must be a string");
		}

		throw new errorConstructorOrMessage(possibleMessage);
	}

	if (typeof errorConstructorOrMessage !== "string") {
		throw new TypeError("First parameter (message) from 'exception' must be a string");
	}

	throw new Error(errorConstructorOrMessage);
}
