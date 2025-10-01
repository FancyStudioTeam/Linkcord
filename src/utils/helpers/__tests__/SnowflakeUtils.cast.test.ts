// @ts-nocheck

import type { Snowflake } from "#types/index.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";
const USER_ID_BIGINT = BigInt(USER_ID_STRING);

describe("Method: SnowflakeUtils.cast", () => {
	it("GIVEN a valid input WHEN casting it THEN returns the casted input", () => {
		const result1 = SnowflakeUtils.cast(USER_ID_STRING);
		const result2 = SnowflakeUtils.cast(USER_ID_BIGINT);

		const expectedResult = USER_ID_STRING;

		expect<Snowflake>(result1).toBe(expectedResult);
		expect<Snowflake>(result2).toBe(expectedResult);
	});

	it("GIVEN an invalid input WHEN casting it THEN a TypeError is thrown", () => {
		const result1 = () => SnowflakeUtils.cast(null);
		const result2 = () => SnowflakeUtils.cast("NOT_A_VALID_SNOWFLAKE_STRING");

		const expectedErrorResult1 = new TypeError(
			"First parameter (input) from 'SnowflakeUtils.cast' must be a bigint, number, or string.",
		);
		const expectedErrorResult2 = new TypeError(
			"First parameter (input) from 'SnowflakeUtils.cast' does not match Discord Snowflake regex.",
		);

		expect(result1).toThrow(expectedErrorResult1);
		expect(result2).toThrow(expectedErrorResult2);
	});
});
