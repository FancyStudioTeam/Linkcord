import { FormatterUtils } from "../FormatterUtils.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const USER_ID_STRING = "80351110224678912";
const USER_ID_SNOWFLAKE = SnowflakeUtils.cast(USER_ID_STRING);

describe("Method: FormatterUtils.userMention", () => {
	describe("GIVEN valid user id", () => {
		it("THEN returns '<@80351110224678912>'", () => {
			const result = FormatterUtils.userMention(USER_ID_SNOWFLAKE);
			const expectedResult = `<@${USER_ID_SNOWFLAKE}>` as const;

			expect(result).toBe(expectedResult);
			expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
		});
	});

	describe("GIVEN invalid user id", () => {
		it("THEN throws 'TypeError'", () => {
			// @ts-expect-error
			const result1 = () => FormatterUtils.userMention(null);
			// @ts-expect-error
			const result2 = () => FormatterUtils.userMention("NOT_A_VALID_SNOWFLAKE_STRING");

			const expectedErrorResult = new TypeError("The first parameter (userId) must be a valid Snowflake.");

			expect(result1).toThrow(expectedErrorResult);
			expect(result2).toThrow(expectedErrorResult);
		});
	});
});
