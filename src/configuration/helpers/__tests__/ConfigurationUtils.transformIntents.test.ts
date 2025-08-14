import { describe, expect, it } from "vitest";
import { GatewayIntents } from "#types/index.js";
import { ConfigurationUtils } from "../ConfigurationUtils.js";

describe("Method: ConfigurationUtils.transformIntents", () => {
	it('Should return "0" if the intents are not an array.', () => {
		// @ts-expect-error
		expect(ConfigurationUtils.transformIntents(null)).toBe(0);
	});

	it("Should return the reduced intents as number.", () => {
		const ExpectedResult = GatewayIntents.Guilds | GatewayIntents.GuildMessages;

		expect(
			ConfigurationUtils.transformIntents([
				GatewayIntents.Guilds,
				GatewayIntents.GuildMessages,
			]),
		).toBe(ExpectedResult);
	});
});
