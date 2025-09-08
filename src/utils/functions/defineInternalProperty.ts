/**
 * Defines an internal property on the given object.
 * @param object - The object where the property will be defined.
 * @param propertyName - The name of the property to define.
 * @param value - The value of the property.
 */
export function defineInternalProperty<Value>(object: unknown, propertyName: string, value: Value): void {
	Object.defineProperty(object, propertyName, {
		configurable: false,
		enumerable: false,
		value,
		writable: false,
	});
}
