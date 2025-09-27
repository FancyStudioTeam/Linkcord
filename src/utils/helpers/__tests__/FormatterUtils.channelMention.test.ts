// @ts-nocheck

import { FormatterUtils } from "../FormatterUtils.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const CHANNEL_ID_STRING = "103735883630395392";
const CHANNEL_ID_SNOWFLAKE = SnowflakeUtils.cast(CHANNEL_ID_STRING);

describe("Method: FormatterUtils.channelMention", () => {
	describe("GIVEN valid channel id", () => {
		it("THEN returns '<#[channelId]>'", () => {
			const result = FormatterUtils.channelMention(CHANNEL_ID_SNOWFLAKE);
			const expectedResult = `<#${CHANNEL_ID_SNOWFLAKE}>` as const;

			expect<typeof expectedResult>(result).toBe(expectedResult);
		});
	});

	describe("GIVEN invalid channel id", () => {
		it("THEN throws 'TypeError'", () => {
			const result1 = () => FormatterUtils.channelMention(null);
			const result2 = () => FormatterUtils.channelMention("NOT_A_VALID_SNOWFLAKE_STRING");

			const expectedErrorResult = new TypeError(
				"First parameter (channelId) from 'FormatterUtils.channelMention' must be a Snowflake.",
			);

			expect(result1).toThrow(expectedErrorResult);
			expect(result2).toThrow(expectedErrorResult);
		});
	});
});
