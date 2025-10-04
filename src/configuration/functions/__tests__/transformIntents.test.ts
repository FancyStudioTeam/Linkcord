import { GatewayIntents } from "#types/index.js";
import { transformIntents } from "../transformIntents.js";

describe("Function: transformIntents", () => {
	it("GIVEN a list of gateway intents WHEN reducing them THEN returns the combined bit field value", () => {
		const result = transformIntents([GatewayIntents.Guilds, GatewayIntents.MessageContent]);
		const expectedResult = GatewayIntents.Guilds | GatewayIntents.MessageContent;

		expect(result).toBe(expectedResult);
	});
});
