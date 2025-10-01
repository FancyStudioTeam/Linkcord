// @ts-nocheck

import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";
const USER_ID_SNOWFLAKE = SnowflakeUtils.cast(USER_ID_STRING);

describe("Method: SnowflakeUtils.timestampFrom", () => {
	it("GIVEN valid Snowflake THEN returns timestamp", () => {
		const result = SnowflakeUtils.timestampFrom(USER_ID_SNOWFLAKE);
		const expectedResult = 1439227597529;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN invalid Snowflake THEN throws 'TypeError'", () => {
		const result1 = () => SnowflakeUtils.timestampFrom(null);
		const result2 = () => SnowflakeUtils.timestampFrom("NOT_A_VALID_SNOWFLAKE_STRING");

		const expectedErrorResult = new TypeError(
			"First parameter (snowflake) from 'SnowflakeUtils.timestampFrom' must be a Snowflake.",
		);

		expect(result1).toThrow(expectedErrorResult);
		expect(result2).toThrow(expectedErrorResult);
	});
});
