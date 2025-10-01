// @ts-nocheck

import { FormatterUtils } from "../FormatterUtils.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const ROLE_ID_STRING = "165511591545143296";
const ROLE_ID_SNOWFLAKE = SnowflakeUtils.cast(ROLE_ID_STRING);

describe("Method: FormatterUtils.roleMention", () => {
	it("GIVEN a valid role ID WHEN formatting it THEN returns the formatted role mention", () => {
		const result = FormatterUtils.roleMention(ROLE_ID_SNOWFLAKE);
		const expectedResult = `<@&${ROLE_ID_SNOWFLAKE}>` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN an invalid role ID WHEN formatting it THEN a TypeError is thrown", () => {
		const result1 = () => FormatterUtils.roleMention(null);
		const result2 = () => FormatterUtils.roleMention("NOT_A_VALID_SNOWFLAKE_STRING");

		const expectedErrorResult = new TypeError(
			"First parameter (roleId) from 'FormatterUtils.roleMention' must be a Snowflake.",
		);

		expect(result1).toThrow(expectedErrorResult);
		expect(result2).toThrow(expectedErrorResult);
	});
});
