import { isFunction, isString } from "#utils/helpers/AssertionUtils.js";
import type { NonAbstractConstructor } from "#utils/types/Util.js";

export function exception(message: string): never;
export function exception<ErrorConstructor extends NonAbstractConstructor<Error>>(
	errorConstructor: ErrorConstructor,
	message: string,
): never;

export function exception(
	errorConstructorOrMessage: NonAbstractConstructor<Error> | string,
	possibleMessage?: string,
): never {
	if (isFunction(errorConstructorOrMessage)) {
		if (!isString(possibleMessage)) {
			throw new TypeError("Second parameter (message) from 'exception' must be a string");
		}

		const ErrorConstructor = errorConstructorOrMessage as NonAbstractConstructor<Error>;

		throw new ErrorConstructor(possibleMessage);
	}

	if (!isString(errorConstructorOrMessage)) {
		throw new TypeError("First parameter (message) from 'exception' must be a string");
	}

	throw new Error(errorConstructorOrMessage);
}
