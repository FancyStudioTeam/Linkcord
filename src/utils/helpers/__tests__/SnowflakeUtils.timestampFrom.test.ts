// @ts-nocheck

import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";
const USER_ID_SNOWFLAKE = SnowflakeUtils.cast(USER_ID_STRING);

describe("Method: SnowflakeUtils.timestampFrom", () => {
	it("GIVEN a valid Snowflake WHEN getting the timestamp from it THEN returns the timestamp", () => {
		const result = SnowflakeUtils.timestampFrom(USER_ID_SNOWFLAKE);
		const expectedResult = 1439227597529;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN an invalid Snowflake WHEN getting the timestamp from it THEN a TypeError is thrown", () => {
		const result1 = () => SnowflakeUtils.timestampFrom(null);
		const result2 = () => SnowflakeUtils.timestampFrom("NOT_A_VALID_SNOWFLAKE_STRING");

		const expectedErrorResult = new TypeError(
			"First parameter (snowflake) from 'SnowflakeUtils.timestampFrom' must be a Snowflake.",
		);

		expect(result1).toThrow(expectedErrorResult);
		expect(result2).toThrow(expectedErrorResult);
	});
});
