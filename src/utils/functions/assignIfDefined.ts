import { isUndefined } from "#utils/helpers/AssertionUtils.js";

export function assignIfDefined<Parent extends object, Property extends PropertyName<Parent>, Value extends Parent[Property]>(
	parent: Parent,
	property: Property,
	value: Value,
) {
	if (!isUndefined(value)) {
		Reflect.set(parent, property, value);
	}
}

type PropertyName<Object extends object> = keyof Object;
