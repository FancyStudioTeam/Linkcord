import { describe, expect, it } from "vitest";
import { GatewayIntents } from "#types/index.js";
import { reduceGatewayIntents } from "../reduceGatewayIntents.js";

describe("Function: reduceGatewayIntents", () => {
	it("Should return the reduced intents as a number.", () => {
		const GatewayIntentsArray = [
			GatewayIntents.Guilds,
			GatewayIntents.GuildMessages,
			GatewayIntents.MessageContent,
		];
		const ExpectedReducedIntents =
			GatewayIntents.Guilds | GatewayIntents.GuildMessages | GatewayIntents.MessageContent;

		expect(reduceGatewayIntents(GatewayIntentsArray)).toEqual(ExpectedReducedIntents);
	});
});
