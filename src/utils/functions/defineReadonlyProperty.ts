import { isObject, isString } from "#utils/helpers/AssertionUtils.js";

export function defineReadonlyProperty<Parent extends object, Property extends string, Value>(
	parent: Parent,
	property: Property,
	value: Value,
): void {
	if (!isObject(parent)) {
		throw new TypeError(`First parameter must be an object`);
	}

	if (!isString(property)) {
		throw new TypeError(`Second parameter must be a string`);
	}

	if (!Reflect.isExtensible(parent)) {
		throw new TypeError(`First parameter is not extensible`);
	}

	if (Reflect.has(parent, property)) {
		throw new TypeError(`First parameter already has a property named '${property}'`);
	}

	Reflect.defineProperty(parent, property, {
		configurable: false,
		enumerable: true,
		value,
		writable: false,
	});
}
