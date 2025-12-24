import { GatewayIntents } from "#types/index.js";
import { transformIntents } from "../transformIntents.js";

describe("transformIntents", () => {
	it("Should reduce the provided array of intents into a bitfield", () => {
		expect(transformIntents([])).toBe(0);
		expect(
			transformIntents([
				GatewayIntents.Guilds,
				GatewayIntents.MessageContent,
			]),
		).toBe(GatewayIntents.Guilds | GatewayIntents.MessageContent);
		expect(
			transformIntents([
				GatewayIntents.Guilds,
				GatewayIntents.MessageContent,
				GatewayIntents.MessageContent, // -> Duplicated
			]),
		).toBe(GatewayIntents.Guilds | GatewayIntents.MessageContent);
	});
});
