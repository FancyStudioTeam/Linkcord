import type { Snowflake } from "#types/index.js";
import type { Constructor } from "#utils/types/Util.js";
import { SnowflakeUtils } from "./SnowflakeUtils.js";

///////////////////////////////////////////////////////////////////////////

const { isSnowflake: _isSnowflake } = SnowflakeUtils;

///////////////////////////////////////////////////////////////////////////

function isArray<Item>(input: unknown): input is Item[] {
	return Array.isArray(input);
}

///////////////////////////////////////////////////////////////////////////

// biome-ignore lint/complexity/noBannedTypes: ...
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

function isSnowflake(input: unknown): input is Snowflake {
	return _isSnowflake(input);
}

///////////////////////////////////////////////////////////////////////////

function isString(input: unknown): input is string {
	return typeof input === "string";
}

///////////////////////////////////////////////////////////////////////////

export const AssertionUtils = Object.freeze({
	isArray,
	isFunction,
	isInstanceOf,
	isObject,
	isSnowflake,
	isString,
});
