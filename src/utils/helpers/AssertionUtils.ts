import type { Snowflake } from "#types/index.js";
import type { Constructor } from "#utils/types/Util.js";
import { SnowflakeUtils } from "./SnowflakeUtils.js";

const { isSnowflake } = SnowflakeUtils;

/** Static utility class that provides runtime type assertions and type narrowing helpers. */
export class AssertionUtils {
	/**
	 * Determines whether the provided input is an array.
	 *
	 * @param input - The input to determine the assertion.
	 *
	 * @typeParam Item - The shape of the item in the array.
	 */
	static isArray<Item>(input: unknown): input is Item[] {
		return Array.isArray(input);
	}

	/**
	 * Determines whether the provided input is a function.
	 *
	 * @param input - The input to determine the assertion.
	 */
	// biome-ignore lint/complexity/noBannedTypes: Expect input to be any kind of function.
	static isFunction(input: unknown): input is Function {
		return typeof input === "function";
	}

	/**
	 * Determines whether the provided input is an instance of the provided class.
	 *
	 * @param input - The input to determine the assertion.
	 * @param _class - The class constructor used to validate the input.
	 *
	 * @typeParam Class - The shape of the class for the constructor.
	 */
	static isInstanceOf<Class>(input: unknown, _class: Constructor<Class>): input is Class {
		return input instanceof _class;
	}

	/**
	 * Determines whether the provided input is an object.
	 *
	 * @param input - The input to determine the assertion.
	 */
	static isObject(input: unknown): input is object {
		return typeof input === "object" && input !== null;
	}

	/**
	 * Determines whether the provided input is a Snowflake.
	 *
	 * @param input - The input to determine the assertion.
	 */
	static isSnowflake(input: unknown): input is Snowflake {
		return isSnowflake(input);
	}

	/**
	 * Determines whether the provided input is a string.
	 *
	 * @param input - The input to determine the assertion.
	 */
	static isString(input: unknown): input is string {
		return typeof input === "string";
	}
}
