import type { Constructor } from "#utils/types/Util.js";

export function isArray<Item>(input: unknown): input is Item[] {
	return Array.isArray(input);
}

export function isBigInt(input: unknown): input is bigint {
	return typeof input === "bigint";
}

export function isBoolean(input: unknown): input is boolean {
	return typeof input === "boolean";
}

export function isEnum<Enum>(input: unknown, _enum: Enum): input is Enum {
	if (!isObject(_enum)) return false;

	const objectValues = Object.values(_enum);
	const isIncluded = objectValues.includes(input);

	return isIncluded;
}

export function isFunction(input: unknown): input is (...args: unknown[]) => unknown {
	return typeof input === "function";
}

export function isInstanceOf<Class>(input: unknown, _class: Constructor<Class>): input is Class {
	return input instanceof _class;
}

export function isInteger(input: unknown): input is number {
	return isNumber(input) && Number.isInteger(input);
}

export function isNull(input: unknown): input is null {
	return input === null;
}

export function isNumber(input: unknown): input is number {
	return typeof input === "number";
}

export function isObject(input: unknown): input is object {
	return typeof input === "object" && !isNull(input);
}

export function isString(input: unknown): input is string {
	return typeof input === "string";
}

export function isSymbol(input: unknown): input is symbol {
	return typeof input === "symbol";
}

export function isUndefined(input: unknown): input is undefined {
	return typeof input === "undefined";
}
