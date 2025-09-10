import { describe, expect, it } from "vitest";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";

describe("Method: SnowflakeUtils.isSnowflake", () => {
	it("Should return 'true' when the input is a valid snowflake.", () => {
		const expectedBooleanResult = true;

		expect(SnowflakeUtils.isSnowflake(USER_ID_STRING)).toBe(expectedBooleanResult);
	});

	it("Should return 'false' when the input is not a valid snowflake.", () => {
		const userIdBitInt = BigInt(USER_ID_STRING);
		const userIdNumber = Number(userIdBitInt);

		const expectedBooleanResult = false;

		expect(SnowflakeUtils.isSnowflake(userIdBitInt)).toBe(expectedBooleanResult);
		expect(SnowflakeUtils.isSnowflake(userIdNumber)).toBe(expectedBooleanResult);
	});
});
