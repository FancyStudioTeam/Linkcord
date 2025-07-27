import { describe, expect, it } from "vitest";
import { GatewayIntents } from "#types/index.js";
import { reduceGatewayIntents } from "../reduceGatewayIntents.js";

describe("Function: reduceGatewayIntents", () => {
	it("Should return the given intents as a number if they are already a number.", () => {
		const GatewayIntentsNumber = GatewayIntents.Guilds | GatewayIntents.GuildMessages;

		expect(reduceGatewayIntents(GatewayIntentsNumber)).toEqual(GatewayIntentsNumber);
	});

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
