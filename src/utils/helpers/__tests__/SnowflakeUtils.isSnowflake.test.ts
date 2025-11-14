import { SnowflakeUtils } from "../SnowflakeUtils.js";

const { isSnowflake } = SnowflakeUtils;

const USER_ID_STRING = "80351110224678912";
const USER_ID_BIGINT = BigInt(USER_ID_STRING);
const USER_ID_NUMBER = Number(USER_ID_STRING);

describe("Method: SnowflakeUtils.isSnowflake", () => {
	it("Should check if the provided input is a snowflake", () => {
		const result1 = isSnowflake(USER_ID_STRING);
		const result2 = isSnowflake(USER_ID_BIGINT);
		const result3 = isSnowflake(USER_ID_NUMBER);

		const expectedResult = true;

		expect(result1).toBe(expectedResult);
		expect(result2).toBe(expectedResult);
		expect(result3).toBe(expectedResult);
	});
});
