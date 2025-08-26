import { describe, expect, expectTypeOf, it } from "vitest";
import type { Snowflake } from "#types/index.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

describe("Method: SnowflakeUtils.cast", () => {
	it('Should return a "Snowflake".', () => {
		const UserIDString = "1346162378575970326";
		const UserIDBigInt = BigInt(UserIDString);
		const ExpectedSnowflakeResult = UserIDString;

		expect(SnowflakeUtils.cast(UserIDString)).toBe(ExpectedSnowflakeResult);
		expect(SnowflakeUtils.cast(UserIDBigInt)).toBe(ExpectedSnowflakeResult);

		expectTypeOf(SnowflakeUtils.cast(UserIDString)).branded.toEqualTypeOf<Snowflake>();
		expectTypeOf(SnowflakeUtils.cast(UserIDBigInt)).branded.toEqualTypeOf<Snowflake>();
	});

	it('Should throw a "TypeError" if the input is not a valid bigint, number, or string.', () => {
		const InvalidSnowflakeInput1 = null;
		const InvalidSnowflakeInput2 = "NOT_A_VALID_SNOWFLAKE_STRING";
		const ExpectedErrorResult1 = new TypeError(
			"The first parameter (input) must be a valid bigint, number, or string.",
		);
		const ExpectedErrorResult2 = new TypeError(
			"The first parameter (input) does not match the Discord snowflake format.",
		);

		// @ts-expect-error
		expect(() => SnowflakeUtils.cast(InvalidSnowflakeInput1)).toThrow(ExpectedErrorResult1);
		expect(() => SnowflakeUtils.cast(InvalidSnowflakeInput2)).toThrow(ExpectedErrorResult2);
	});
});
