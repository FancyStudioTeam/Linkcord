import type { Newable } from "#utils/types/Util.js";

/**
 * Throws an exception in inline expressions.
 * @param message - The message of the `Error` instance.
 *
 * @group Utils/Functions
 */
export function exception(message: string): never;

/**
 * Throws an exception in inline expressions.
 * @param error - The class to instantiate the error.
 * @param message The message of the `Error` instance.
 *
 * @group Utils/Functions
 */
export function exception<Instance extends Newable<Error>>(error: Instance, message: string): never;

/**
 * Throws an exception in inline expressions.
 *
 * @param errorOrMessage - The class to instantiate the error or the message of the `Error` instance.
 * @param possibleMessage - The message of the `Error` instance, if any.
 */
export function exception(errorOrMessage: Newable<Error> | string, possibleMessage?: string): never {
	if (typeof errorOrMessage === "string") {
		throw new Error(errorOrMessage);
	}

	if (!possibleMessage || typeof possibleMessage !== "string") {
		throw new TypeError("Second parameter (message) from 'exception' must be present and be a string");
	}

	throw new errorOrMessage(possibleMessage);
}
