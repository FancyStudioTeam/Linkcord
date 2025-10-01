// @ts-nocheck

import { FormatterUtils } from "../FormatterUtils.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";
const USER_ID_SNOWFLAKE = SnowflakeUtils.cast(USER_ID_STRING);

describe("Method: FormatterUtils.userMention", () => {
	it("GIVEN valid user ID THEN returns user mention", () => {
		const result = FormatterUtils.userMention(USER_ID_SNOWFLAKE);
		const expectedResult = `<@${USER_ID_SNOWFLAKE}>` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN invalid user ID THEN throws 'TypeError'", () => {
		const result1 = () => FormatterUtils.userMention(null);
		const result2 = () => FormatterUtils.userMention("NOT_A_VALID_SNOWFLAKE_STRING");

		const expectedErrorResult = new TypeError(
			"First parameter (userId) from 'FormatterUtils.userMention' must be a Snowflake.",
		);

		expect(result1).toThrow(expectedErrorResult);
		expect(result2).toThrow(expectedErrorResult);
	});
});
