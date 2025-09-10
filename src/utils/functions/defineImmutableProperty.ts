/**
 * Defines an immutable property on an object.
 *
 * @param object - The object where the property will be defined.
 * @param propertyName - The name of the property to define.
 * @param value - The value of the property.
 *
 * @group Utils/Functions
 */
export function defineImmutableProperty<Object, Value>(object: Object, propertyName: string, value: Value): void {
	Object.defineProperty(object, propertyName, {
		configurable: false,
		enumerable: false,
		value,
		writable: false,
	});
}
