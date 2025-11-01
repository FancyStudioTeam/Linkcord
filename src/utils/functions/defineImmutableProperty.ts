import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";

const { isObject, isString } = AssertionUtils;

export function defineImmutableProperty<Object extends object, PropertyName extends string, Value>(
	object: Object,
	propertyName: PropertyName,
	value: Value,
): void {
	if (!isObject(object)) {
		throw new TypeError("First parameter (object) from 'defineImmutableProperty' must be a valid object");
	}

	if (!isString(propertyName)) {
		throw new TypeError("Second parameter (propertyName) from 'defineImmutableProperty' must be a valid string");
	}

	Object.defineProperty(object, propertyName, {
		configurable: false,
		enumerable: false,
		value,
		writable: false,
	});
}
