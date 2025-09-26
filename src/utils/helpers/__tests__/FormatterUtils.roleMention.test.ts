// @ts-nocheck

import { FormatterUtils } from "../FormatterUtils.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const ROLE_ID_STRING = "165511591545143296";
const ROLE_ID_SNOWFLAKE = SnowflakeUtils.cast(ROLE_ID_STRING);

describe("Method: FormatterUtils.roleMention", () => {
	describe("GIVEN valid role id", () => {
		it("THEN returns '<@&[roleId]>'", () => {
			const result = FormatterUtils.roleMention(ROLE_ID_SNOWFLAKE);
			const expectedResult = `<@&${ROLE_ID_SNOWFLAKE}>` as const;

			expect<typeof expectedResult>(result).toBe(expectedResult);
		});
	});

	describe("GIVEN invalid role id", () => {
		it("THEN throws 'TypeError'", () => {
			const result1 = () => FormatterUtils.roleMention(null);
			const result2 = () => FormatterUtils.roleMention("NOT_A_VALID_SNOWFLAKE_STRING");

			const expectedErrorResult = new TypeError("The first parameter (roleId) must be a Snowflake.");

			expect(result1).toThrow(expectedErrorResult);
			expect(result2).toThrow(expectedErrorResult);
		});
	});
});
