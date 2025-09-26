import { FormatterUtils } from "../FormatterUtils.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const ROLE_ID_STRING = "165511591545143296";
const ROLE_ID_SNOWFLAKE = SnowflakeUtils.cast(ROLE_ID_STRING);

describe("Method: FormatterUtils.roleMention", () => {
	describe("GIVEN valid role id", () => {
		it("THEN returns '<@&[roleId]>'", () => {
			const result = FormatterUtils.roleMention(ROLE_ID_SNOWFLAKE);
			const expectedResult = `<@&${ROLE_ID_SNOWFLAKE}>` as const;

			expect(result).toBe(expectedResult);
			expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
		});
	});

	describe("GIVEN invalid role id", () => {
		it("THEN throws 'TypeError'", () => {
			// @ts-expect-error
			const result1 = () => FormatterUtils.roleMention(null);
			// @ts-expect-error
			const result2 = () => FormatterUtils.roleMention("NOT_A_VALID_SNOWFLAKE_STRING");

			const expectedErrorResult = new TypeError("The first parameter (roleId) must be a valid Snowflake.");

			expect(result1).toThrow(expectedErrorResult);
			expect(result2).toThrow(expectedErrorResult);
		});
	});
});
