import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";

const { isObject, isString } = AssertionUtils;

export function defineImmutableProperty<Object extends object, Name extends string, Value>(
	parent: Object,
	name: Name,
	value: Value,
): void {
	if (!isObject(parent)) {
		throw new TypeError("First parameter (parent) from 'defineImmutableProperty' must be an object");
	}

	if (!isString(name)) {
		throw new TypeError("Second parameter (name) from 'defineImmutableProperty' must be a string");
	}

	Object.defineProperty(parent, name, {
		configurable: false,
		enumerable: false,
		value,
		writable: false,
	});
}
