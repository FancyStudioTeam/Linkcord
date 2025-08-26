// biome-ignore-all lint/style/noMagicNumbers: Magic numbers are not important in testing files.

import { describe, expect, it } from "vitest";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

describe("Method: SnowflakeUtils.timestampFrom", () => {
	it("Should return the timestamp of the snowflake.", () => {
		const UserIDString = "1346162378575970326";
		const UserIDBigInt = BigInt(UserIDString);
		const ExpectedResult = 1741020521540;

		expect(SnowflakeUtils.timestampFrom(UserIDString)).toBe(ExpectedResult);
		expect(SnowflakeUtils.timestampFrom(UserIDBigInt)).toBe(ExpectedResult);
	});

	it("Should throw an error if the snowflake is not a valid number or string.", () => {
		// @ts-expect-error
		expect(() => SnowflakeUtils.timestampFrom(null)).toThrowError(TypeError);
		expect(() => SnowflakeUtils.timestampFrom("NOT_A_VALID_SNOWFLAKE_STRING")).toThrowError(
			TypeError,
		);
	});
});
