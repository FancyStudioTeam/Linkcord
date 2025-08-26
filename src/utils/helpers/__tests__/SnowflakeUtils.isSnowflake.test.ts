import { describe, expect, it } from "vitest";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

describe("Method: SnowflakeUtils.isSnowflake", () => {
	it('Should return whether the input is a "Snowflake".', () => {
		const UserIDString = "1346162378575970326";
		const UserIDBigInt = BigInt(UserIDString);
		const UserIDSnowflake = SnowflakeUtils.cast(UserIDString);

		expect(SnowflakeUtils.isSnowflake(UserIDSnowflake)).toBe(true);
		expect(SnowflakeUtils.isSnowflake(UserIDString)).toBe(true);
		expect(SnowflakeUtils.isSnowflake(UserIDBigInt)).toBe(false);
	});
});
