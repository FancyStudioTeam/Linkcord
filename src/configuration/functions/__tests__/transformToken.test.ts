import { transformToken } from "../transformToken.js";

const DISCORD_TOKEN = "ODAzNTExMTAyMjQ2Nzg5MTI.XXXXXXXXXX";

describe("Function: transformToken", () => {
	it("GIVEN a Discord token without prefix WHEN transforming it THEN returns the original token", () => {
		const result = transformToken(DISCORD_TOKEN);
		const expectedResult = DISCORD_TOKEN;

		expect(result).toBe(expectedResult);
	});

	it("GIVEN a Discord token with a prefix WHEN transforming it THEN return the token without the prefix", () => {
		const result1 = transformToken(`Bot ${DISCORD_TOKEN}`);
		const result2 = transformToken(`BOT ${DISCORD_TOKEN}`);
		const result3 = transformToken(`bot ${DISCORD_TOKEN}`);

		const expectedResult = DISCORD_TOKEN;

		expect(result1).toBe(expectedResult);
		expect(result2).toBe(expectedResult);
		expect(result3).toBe(expectedResult);
	});
});
