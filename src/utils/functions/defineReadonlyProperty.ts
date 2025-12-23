import { isObject, isString } from "#utils/helpers/AssertionUtils.js";

export function defineReadonlyProperty<Parent extends object, Property extends string, Value>(
	parent: Parent,
	property: Property,
	value: Value,
): void {
	if (!isObject(parent)) {
		throw new TypeError("First parameter (parent) from defineReadonlyProperty must be an object");
	}

	if (!isString(property)) {
		throw new TypeError("Second parameter (property) from defineReadonlyProperty must be a string");
	}

	if (!Reflect.isExtensible(parent)) {
		throw new TypeError("Provided parent is not extensible");
	}

	if (Reflect.has(parent, property)) {
		throw new TypeError(`Provided parent already has a property named '${property}'`);
	}

	Reflect.defineProperty(parent, property, {
		configurable: false,
		enumerable: false,
		value,
		writable: false,
	});
}
