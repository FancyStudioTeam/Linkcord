// @ts-nocheck

import type { Snowflake } from "#types/index.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";
const USER_ID_BIGINT = BigInt(USER_ID_STRING);

describe("Method: SnowflakeUtils.cast", () => {
	describe("GIVEN valid input", () => {
		it("THEN casts input to snowflake", () => {
			const result1 = SnowflakeUtils.cast(USER_ID_STRING);
			const result2 = SnowflakeUtils.cast(USER_ID_BIGINT);

			const expectedResult = USER_ID_STRING;

			expect<Snowflake>(result1).toBe(expectedResult);
			expect<Snowflake>(result2).toBe(expectedResult);
		});
	});

	describe("GIVEN invalid input", () => {
		it("THEN throws 'TypeError'", () => {
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
});
