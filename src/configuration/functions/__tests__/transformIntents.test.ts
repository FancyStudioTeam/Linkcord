import { GatewayIntents } from "#types/index.js";
import { transformIntents } from "../transformIntents.js";

const GATEWAY_INTENTS_ARRAY = [
	GatewayIntents.Guilds,
	GatewayIntents.MessageContent,
];

describe("Function: transformIntents", () => {
	it("Should reduce the provided array of intents into a bit field", () => {
		const result = transformIntents(GATEWAY_INTENTS_ARRAY);
		const expectedResult = GatewayIntents.Guilds | GatewayIntents.MessageContent;

		expect(result).toBe(expectedResult);
	});

	it("Should remove the duplicated items from the array", () => {
		const result = transformIntents([
			...GATEWAY_INTENTS_ARRAY,
			GatewayIntents.Guilds,
		]);
		const expectedResult = GatewayIntents.Guilds | GatewayIntents.MessageContent;

		expect(result).toBe(expectedResult);
	});
});
