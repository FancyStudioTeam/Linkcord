import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";
import type { Constructor } from "#utils/types/Util.js";

const { isFunction, isString } = AssertionUtils;

/**
 * Throws an exception in an inline expression.
 *
 * @param message - The message of the exception.
 */
export function exception(message: string): never;

/**
 * Throws an exception in an inline expression.
 *
 * @param errorConstructor - The constructor of the error to use for the exception.
 * @param message - The message of the exception.
 *
 * @typeParam ErrorConstructor - The shape of the constructor of the error.
 */
export function exception<ErrorConstructor extends Constructor<Error>>(
	errorConstructor: ErrorConstructor,
	message: string,
): never;

export function exception(errorConstructorOrMessage: Constructor<Error> | string, possibleMessage?: string): never {
	if (isFunction(errorConstructorOrMessage)) {
		if (!isString(possibleMessage)) {
			throw new TypeError("Second parameter (message) from 'exception' must be a valid string");
		}

		throw new errorConstructorOrMessage(possibleMessage);
	}

	if (!isString(errorConstructorOrMessage)) {
		throw new TypeError("First parameter (message) from 'exception' must be a valid string");
	}

	throw new Error(errorConstructorOrMessage);
}
