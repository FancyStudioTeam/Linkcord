import type { Constructor } from "#utils/types/Util.js";

function isArray<Item>(input: unknown): input is Item[] {
	return Array.isArray(input);
}

function isBigInt(input: unknown): input is bigint {
	return typeof input === "bigint";
}

function isEnum<Enum>(input: unknown, _enum: Enum): input is Enum {
	if (!isObject(_enum)) return false;

	const objectValues = Object.values(_enum);
	const isIncluded = objectValues.includes(input);

	return isIncluded;
}

// biome-ignore lint/complexity/noBannedTypes: Expect any function.
function isFunction(input: unknown): input is Function {
	return typeof input === "function";
}

function isInstanceOf<Class>(input: unknown, _class: Constructor<Class>): input is Class {
	return input instanceof _class;
}

function isNumber(input: unknown): input is number {
	return typeof input === "number";
}

function isObject(input: unknown): input is object {
	return typeof input === "object" && input !== null;
}

function isString(input: unknown): input is string {
	return typeof input === "string";
}

function isSymbol(input: unknown): input is symbol {
	return typeof input === "symbol";
}

function isUndefined(input: unknown): input is undefined {
	return typeof input === "undefined";
}

export const AssertionUtils = Object.freeze({
	isArray,
	isBigInt,
	isEnum,
	isFunction,
	isInstanceOf,
	isNumber,
	isObject,
	isString,
	isSymbol,
	isUndefined,
});
