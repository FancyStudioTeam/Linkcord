import { SnowflakeUtils } from "../SnowflakeUtils.js";

const { cast, timestampFrom } = SnowflakeUtils;

const USER_ID_STRING = "80351110224678912";
const USER_ID_SNOWFLAKE = cast(USER_ID_STRING);

describe("Method: SnowflakeUtils.timestampFrom", () => {
	it("Should extract the timestamp from the provided snowflake", () => {
		const result = timestampFrom(USER_ID_SNOWFLAKE);
		const expectedResult = 1439227597529;

		expect(result).toBe(expectedResult);
	});

	it("Should throw a TypeError if any of the provided parameters are not valid", () => {
		// @ts-expect-error
		const result1 = () => timestampFrom(null);
		// @ts-expect-error
		const result2 = () => timestampFrom("NOT_A_VALID_SNOWFLAKE_STRING");

		const expectedErrorResult = new TypeError("First parameter (snowflake) from 'SnowflakeUtils.timestampFrom' must be a snowflake");

		expect(result1).toThrow(expectedErrorResult);
		expect(result2).toThrow(expectedErrorResult);
	});
});
