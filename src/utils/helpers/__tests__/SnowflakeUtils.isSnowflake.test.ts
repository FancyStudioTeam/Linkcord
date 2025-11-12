import { SnowflakeUtils } from "../SnowflakeUtils.js";

const { isSnowflake } = SnowflakeUtils;

const USER_ID_STRING = "80351110224678912";
const USER_ID_BIGINT = BigInt(USER_ID_STRING);

describe("Method: SnowflakeUtils.isSnowflake", () => {
	it("Should check if the provided input is a snowflake", () => {
		const result1 = isSnowflake(USER_ID_STRING);
		const result2 = isSnowflake(USER_ID_BIGINT);

		const expectedResult1 = true;
		const expectedResult2 = false;

		expect(result1).toBe(expectedResult1);
		expect(result2).toBe(expectedResult2);
	});
});
