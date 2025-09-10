import { describe, expect, it } from "vitest";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";
const USER_ID_SNOWFLAKE = SnowflakeUtils.cast(USER_ID_STRING);

describe("Method: SnowflakeUtils.timestampFrom", () => {
	it("Should return '1439227597529' when using a valid snowflake.", () => {
		const expectedTimestampResult = 1439227597529;

		expect(SnowflakeUtils.timestampFrom(USER_ID_SNOWFLAKE)).toBe(expectedTimestampResult);
	});

	it("Should throw 'TypeError' when the input is not a valid snowflake.", () => {
		const invalidSnowflakeInput1 = null;
		const invalidSnowflakeInput2 = "NOT_A_VALID_SNOWFLAKE_STRING";

		const expectedErrorResult = new TypeError("The first parameter (snowflake) must be a valid snowflake.");

		// @ts-expect-error
		expect(() => SnowflakeUtils.timestampFrom(invalidSnowflakeInput1)).toThrow(expectedErrorResult);
		// @ts-expect-error
		expect(() => SnowflakeUtils.timestampFrom(invalidSnowflakeInput2)).toThrow(expectedErrorResult);
	});
});
