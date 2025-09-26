import { FormatterUtils } from "../FormatterUtils.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const CHANNEL_ID_STRING = "103735883630395392";
const CHANNEL_ID_SNOWFLAKE = SnowflakeUtils.cast(CHANNEL_ID_STRING);

describe("Method: FormatterUtils.channelMention", () => {
	describe("GIVEN valid channel id", () => {
		it("THEN returns '<#[channelId]>'", () => {
			const result = FormatterUtils.channelMention(CHANNEL_ID_SNOWFLAKE);
			const expectedResult = `<#${CHANNEL_ID_SNOWFLAKE}>` as const;

			expect(result).toBe(expectedResult);
			expectTypeOf(result).toEqualTypeOf<typeof expectedResult>();
		});
	});

	describe("GIVEN invalid channel id", () => {
		it("THEN throws 'TypeError'", () => {
			// @ts-expect-error
			const result1 = () => FormatterUtils.channelMention(null);
			// @ts-expect-error
			const result2 = () => FormatterUtils.channelMention("NOT_A_VALID_SNOWFLAKE_STRING");

			const expectedErrorResult = new TypeError("The first parameter (channelId) must be a valid Snowflake.");

			expect(result1).toThrow(expectedErrorResult);
			expect(result2).toThrow(expectedErrorResult);
		});
	});
});
