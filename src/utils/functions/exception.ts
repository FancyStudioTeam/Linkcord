import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";
import type { Constructor } from "#utils/types/Util.js";

/* --------------------------------------------------------------------------- */

const { isFunction, isString } = AssertionUtils;

/* --------------------------------------------------------------------------- */

export function exception(message: string): never;
export function exception<ErrorConstructor extends Constructor<Error>>(
	errorConstructor: ErrorConstructor,
	message: string,
): never;

export function exception(errorConstructorOrMessage: Constructor<Error> | string, possibleMessage?: string): never {
	if (isFunction(errorConstructorOrMessage)) {
		if (!isString(possibleMessage)) {
			throw new TypeError("Second parameter (message) from 'exception' must be a string");
		}

		throw new errorConstructorOrMessage(possibleMessage);
	}

	if (!isString(errorConstructorOrMessage)) {
		throw new TypeError("First parameter (message) from 'exception' must be a string");
	}

	throw new Error(errorConstructorOrMessage);
}
