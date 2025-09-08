import { describe, expect, it } from "vitest";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

describe("Method: SnowflakeUtils.timestampFrom", () => {
	it("Should return the timestamp of the snowflake.", () => {
		const UserIDString = "1346162378575970326";
		const UserIDSnowflake = SnowflakeUtils.cast(UserIDString);
		const ExpectedTimestampResult = 1741020521540;

		expect(SnowflakeUtils.timestampFrom(UserIDSnowflake)).toBe(ExpectedTimestampResult);
	});

	it('Should throw a "TypeError" if the snowflake is not a valid snowflake.', () => {
		const InvalidSnowflakeInput1 = null;
		const InvalidSnowflakeInput2 = "NOT_A_VALID_SNOWFLAKE_STRING";
		const ExpectedErrorResult = new TypeError("The first parameter (snowflake) must be a valid snowflake.");

		// @ts-expect-error
		expect(() => SnowflakeUtils.timestampFrom(InvalidSnowflakeInput1)).toThrow(ExpectedErrorResult);
		// @ts-expect-error
		expect(() => SnowflakeUtils.timestampFrom(InvalidSnowflakeInput2)).toThrow(ExpectedErrorResult);
	});
});
