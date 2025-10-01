// @ts-nocheck

import { FormatterUtils } from "../FormatterUtils.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const CHANNEL_ID_STRING = "103735883630395392";
const CHANNEL_ID_SNOWFLAKE = SnowflakeUtils.cast(CHANNEL_ID_STRING);

describe("Method: FormatterUtils.channelMention", () => {
	it("GIVEN a valid channel ID WHEN formatting it THEN returns the formatted channel mention", () => {
		const result = FormatterUtils.channelMention(CHANNEL_ID_SNOWFLAKE);
		const expectedResult = `<#${CHANNEL_ID_SNOWFLAKE}>` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("GIVEN an invalid channel ID WHEN formatting it THEN a TypeError is thrown", () => {
		const result1 = () => FormatterUtils.channelMention(null);
		const result2 = () => FormatterUtils.channelMention("NOT_A_VALID_SNOWFLAKE_STRING");

		const expectedErrorResult = new TypeError(
			"First parameter (channelId) from 'FormatterUtils.channelMention' must be a Snowflake.",
		);

		expect(result1).toThrow(expectedErrorResult);
		expect(result2).toThrow(expectedErrorResult);
	});
});
