/**
 * Defines an immutable property on an object.
 *
 * @param object - The object where the property will be defined.
 * @param propertyName - The name of the property to define.
 * @param value - The value of the property.
 *
 * @typeParam Object - The inferred type from the `object` parameter.
 * @typeParam Value - The inferred type from the `value` parameter.
 * @group Utils/Functions
 */
export function defineImmutableProperty<Object, Value>(object: Object, propertyName: string, value: Value): void {
	if (typeof object !== "object" || object === null) {
		throw new TypeError("First parameter (object) from 'defineImmutableProperty' must be an object.");
	}

	Object.defineProperty(object, propertyName, {
		configurable: false,
		enumerable: false,
		value,
		writable: false,
	});
}
