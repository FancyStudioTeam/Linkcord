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
	if (typeof object !== "object" || object === null) {
		throw new TypeError("First parameter (object) from 'defineImmutableProperty' must be an object");
	}

	if (typeof propertyName !== "string") {
		throw new TypeError("Second parameter (propertyName) from 'defineImmutableProperty' must be a string");
	}

	Object.defineProperty(object, propertyName, {
		configurable: false,
		enumerable: false,
		value,
		writable: false,
	});
}
