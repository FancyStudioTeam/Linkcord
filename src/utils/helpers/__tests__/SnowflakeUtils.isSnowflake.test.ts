import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";
const USER_ID_BIGINT = BigInt(USER_ID_STRING);

describe("Method: SnowflakeUtils.isSnowflake", () => {
	describe("GIVEN valid snowflake", () => {
		it("THEN returns 'true'", () => {
			const result = SnowflakeUtils.isSnowflake(USER_ID_STRING);
			const expectedResult = true;

			expect(result).toBe(expectedResult);
		});
	});

	describe("GIVEN invalid snowflake", () => {
		it("THEN returns 'false'", () => {
			const result = SnowflakeUtils.isSnowflake(USER_ID_BIGINT);
			const expectedResult = false;

			expect(result).toBe(expectedResult);
		});
	});
});
