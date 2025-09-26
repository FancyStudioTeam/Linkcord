import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";
const USER_ID_SNOWFLAKE = SnowflakeUtils.cast(USER_ID_STRING);

describe("Method: SnowflakeUtils.timestampFrom", () => {
	describe("GIVEN valid snowflake", () => {
		it("THEN returns timestamp from snowflake", () => {
			const result = SnowflakeUtils.timestampFrom(USER_ID_SNOWFLAKE);
			const expectedResult = 1439227597529;

			expect(result).toBe(expectedResult);
		});
	});

	describe("GIVEN invalid snowflake", () => {
		it("THEN throws 'TypeError'", () => {
			// @ts-expect-error
			const result1 = () => SnowflakeUtils.timestampFrom(null);
			// @ts-expect-error
			const result2 = () => SnowflakeUtils.timestampFrom("NOT_A_VALID_SNOWFLAKE_STRING");

			const expectedErrorResult = new TypeError("The first parameter (snowflake) must be a Snowflake.");

			expect(result1).toThrow(expectedErrorResult);
			expect(result2).toThrow(expectedErrorResult);
		});
	});
});
