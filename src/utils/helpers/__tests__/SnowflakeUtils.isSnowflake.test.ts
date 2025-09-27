import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";
const USER_ID_BIGINT = BigInt(USER_ID_STRING);

describe("Method: SnowflakeUtils.isSnowflake", () => {
	describe("GIVEN first parameter", () => {
		it("THEN returns whether value is snowflake", () => {
			const result1 = SnowflakeUtils.isSnowflake(USER_ID_STRING);
			const result2 = SnowflakeUtils.isSnowflake(USER_ID_BIGINT);

			const expectedResult1 = true;
			const expectedResult2 = false;

			expect(result1).toBe(expectedResult1);
			expect(result2).toBe(expectedResult2);
		});
	});
});
