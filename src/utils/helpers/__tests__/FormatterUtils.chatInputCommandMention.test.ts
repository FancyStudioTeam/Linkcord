import { FormatterUtils } from "../FormatterUtils.js";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

const { cast } = SnowflakeUtils;
const { chatInputCommandMention } = FormatterUtils;

const CHAT_INPUT_COMMAND_ID_STRING = "816437322781949972";
const CHAT_INPUT_COMMAND_ID_SNOWFLAKE = cast(CHAT_INPUT_COMMAND_ID_STRING);

describe("Method: FormatterUtils.chatInputCommandMention", () => {
	it("Should format the provided command name and command ID into a chat input command mention", () => {
		const result = chatInputCommandMention("airhorn", CHAT_INPUT_COMMAND_ID_SNOWFLAKE);
		const expectedResult = `</airhorn:${CHAT_INPUT_COMMAND_ID_SNOWFLAKE}>` as const;

		expect<typeof expectedResult>(result).toBe(expectedResult);
	});

	it("Should format the provided list of command names and command ID into a chat input command mention", () => {
		const result1 = chatInputCommandMention(["airhorn", "play"], CHAT_INPUT_COMMAND_ID_SNOWFLAKE);
		const result2 = chatInputCommandMention(["airhorn", "sounds", "play"], CHAT_INPUT_COMMAND_ID_SNOWFLAKE);

		const expectedResult1 = `</airhorn play:${CHAT_INPUT_COMMAND_ID_SNOWFLAKE}>` as const;
		const expectedResult2 = `</airhorn sounds play:${CHAT_INPUT_COMMAND_ID_SNOWFLAKE}>` as const;

		expect<typeof expectedResult1>(result1).toBe(expectedResult1);
		expect<typeof expectedResult2>(result2).toBe(expectedResult2);
	});

	it("Should throw a TypeError if any of the provided parameters are not valid", () => {
		// @ts-expect-error
		const result1 = () => chatInputCommandMention(null);
		// @ts-expect-error
		const result2 = () => chatInputCommandMention(["airhorn"], CHAT_INPUT_COMMAND_ID_SNOWFLAKE);
		// @ts-expect-error
		const result3 = () => chatInputCommandMention("airhorn", null);

		const expectedError1 = new TypeError(
			"First parameter (commandName) from 'FormatterUtils.chatInputCommandMention' must be a string",
		);
		const expectedError2 = new TypeError(
			"Second parameter (commandId) from 'FormatterUtils.chatInputCommandMention' must be a Snowflake",
		);

		expect(result1).toThrow(expectedError1);
		expect(result2).toThrow(expectedError1);
		expect(result3).toThrow(expectedError2);
	});
});
