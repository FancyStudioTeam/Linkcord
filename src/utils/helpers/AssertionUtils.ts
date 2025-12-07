import type { Constructor } from "#utils/types/Util.js";

function isArray<Item>(input: unknown): input is Item[] {
	return Array.isArray(input);
}

function isBigInt(input: unknown): input is bigint {
	return typeof input === "bigint";
}

function isBoolean(input: unknown): input is boolean {
	return typeof input === "boolean";
}

function isEnum<Enum>(input: unknown, _enum: Enum): input is Enum {
	if (!isObject(_enum)) return false;

	const objectValues = Object.values(_enum);
	const isIncluded = objectValues.includes(input);

	return isIncluded;
}

function isFunction(input: unknown): input is (...args: unknown[]) => unknown {
	return typeof input === "function";
}

function isInstanceOf<Class>(input: unknown, _class: Constructor<Class>): input is Class {
	return input instanceof _class;
}

function isInteger(input: unknown): input is number {
	return isNumber(input) && Number.isInteger(input);
}

function isNull(input: unknown): input is null {
	return input === null;
}

function isNumber(input: unknown): input is number {
	return typeof input === "number";
}

function isObject(input: unknown): input is object {
	return typeof input === "object" && !isNull(input);
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
	isBoolean,
	isEnum,
	isFunction,
	isInstanceOf,
	isInteger,
	isNull,
	isNumber,
	isObject,
	isString,
	isSymbol,
	isUndefined,
});
