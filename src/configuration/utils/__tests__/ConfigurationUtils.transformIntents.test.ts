import { describe, expect, it } from "vitest";
import { GatewayIntents } from "#types/index.js";
import { ConfigurationUtils } from "../ConfigurationUtils.js";

describe("Method: transformIntents", () => {
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
