import { describe, expect, expectTypeOf, it } from "vitest";
import type { Snowflake } from "#types/index.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";

describe("Method: SnowflakeUtils.cast", () => {
	it("Should return 'Snowflake' when using a valid bigint, number, or string.", () => {
		const userIdBigInt = BigInt(USER_ID_STRING);
		const userIdNumber = Number(userIdBigInt);

		const expectedSnowflakeResult = USER_ID_STRING;

		expect(SnowflakeUtils.cast(USER_ID_STRING)).toBe(expectedSnowflakeResult);
		expect(SnowflakeUtils.cast(userIdBigInt)).toBe(expectedSnowflakeResult);
		expect(SnowflakeUtils.cast(userIdNumber)).toBe(expectedSnowflakeResult);

		expectTypeOf(SnowflakeUtils.cast(USER_ID_STRING)).branded.toEqualTypeOf<Snowflake>();
		expectTypeOf(SnowflakeUtils.cast(userIdBigInt)).branded.toEqualTypeOf<Snowflake>();
		expectTypeOf(SnowflakeUtils.cast(userIdNumber)).branded.toEqualTypeOf<Snowflake>();
	});

	it("Should throw 'TypeError' when the input is not a valid bigint, number, or string.", () => {
		const invalidSnowflakeInput1 = null;
		const invalidSnowflakeInput2 = "NOT_A_VALID_SNOWFLAKE_STRING";

		const expectedErrorResult1 = new TypeError(
			"The first parameter (input) must be a valid bigint, number, or string.",
		);
		const expectedErrorResult2 = new TypeError(
			"The first parameter (input) does not match the Discord snowflake format.",
		);

		// @ts-expect-error
		expect(() => SnowflakeUtils.cast(invalidSnowflakeInput1)).toThrow(expectedErrorResult1);
		expect(() => SnowflakeUtils.cast(invalidSnowflakeInput2)).toThrow(expectedErrorResult2);
	});
});
