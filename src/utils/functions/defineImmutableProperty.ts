import { AssertionUtils } from "#utils/helpers/AssertionUtils.js";

const { isObject, isString } = AssertionUtils;

/**
 * Defines an immutable property on an object.
 *
 * @param object - The object where the property will be defined.
 * @param propertyName - The name of the property to define.
 * @param value - The value of the property.
 *
 * @typeParam Object - The inferred type from the `object` parameter.
 * @typeParam PropertyName - The inferred type from the `propertyName` parameter.
 * @typeParam Value - The inferred type from the `value` parameter.
 */
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
