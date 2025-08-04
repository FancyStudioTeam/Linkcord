import { describe, expect, it } from "vitest";
import { ConfigurationUtils } from "../ConfigurationUtils.js";

describe("Method: ConfigurationUtils.transformToken", () => {
	it("Should return an empty string if the token is not a string.", () => {
		// @ts-expect-error
		expect(ConfigurationUtils.transformToken(null)).toBe("");
	});

	it('Should remove the "Bot" prefix from the token.', () => {
		const BotToken = "ANY_BOT_DISCORD_TOKEN";

		expect(ConfigurationUtils.transformToken(`Bot ${BotToken}`)).toBe(BotToken);
		expect(ConfigurationUtils.transformToken(`BOT ${BotToken}`)).toBe(BotToken);
		expect(ConfigurationUtils.transformToken(`bot ${BotToken}`)).toBe(BotToken);
	});

	it('Should remove the "Bot" prefix with leading or trailing spaces.', () => {
		const BotToken = "ANY_BOT_DISCORD_TOKEN";

		expect(ConfigurationUtils.transformToken(`     Bot ${BotToken}`)).toBe(BotToken);
		expect(ConfigurationUtils.transformToken(`Bot     ${BotToken}`)).toBe(BotToken);
		expect(ConfigurationUtils.transformToken(`     Bot     ${BotToken}`)).toBe(BotToken);
	});
});
