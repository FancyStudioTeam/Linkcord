import type { Constructor } from "#utils/types/Util.js";
import { SnowflakeUtils } from "./SnowflakeUtils.js";

///////////////////////////////////////////////////////////////////////////

const { isSnowflake } = SnowflakeUtils;

///////////////////////////////////////////////////////////////////////////

function isArray<Item>(input: unknown): input is Item[] {
	return Array.isArray(input);
}

///////////////////////////////////////////////////////////////////////////

function isEnum<Enum>(input: unknown, _enum: Enum): input is Enum {
	if (!isObject(_enum)) return false;

	const objectValues = Object.values(_enum);
	const isIncluded = objectValues.includes(input);

	return isIncluded;
}

///////////////////////////////////////////////////////////////////////////

// biome-ignore lint/complexity/noBannedTypes: .
function isFunction(input: unknown): input is Function {
	return typeof input === "function";
}

///////////////////////////////////////////////////////////////////////////

function isInstanceOf<Class>(input: unknown, _class: Constructor<Class>): input is Class {
	return input instanceof _class;
}

///////////////////////////////////////////////////////////////////////////

function isObject(input: unknown): input is object {
	return typeof input === "object" && input !== null;
}

///////////////////////////////////////////////////////////////////////////

function isString(input: unknown): input is string {
	return typeof input === "string";
}

///////////////////////////////////////////////////////////////////////////

export const AssertionUtils = Object.freeze({
	isArray,
	isEnum,
	isFunction,
	isInstanceOf,
	isObject,
	isSnowflake,
	isString,
});
