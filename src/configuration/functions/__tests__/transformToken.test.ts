import { transformToken } from "../transformToken.js";

const DISCORD_BOT_TOKEN = "ODAzNTExMTAyMjQ2Nzg5MTI.XXXXXXXXXX";

describe("Function: transformToken", () => {
	it("Should return the original token", () => {
		const result = transformToken(DISCORD_BOT_TOKEN);
		const expectedResult = DISCORD_BOT_TOKEN;

		expect(result).toBe(expectedResult);
	});

	it("Should remove the Bot prefix from the token", () => {
		const result1 = transformToken(`Bot ${DISCORD_BOT_TOKEN}`);
		const result2 = transformToken(`BOT ${DISCORD_BOT_TOKEN}`);
		const result3 = transformToken(`bot ${DISCORD_BOT_TOKEN}`);

		const expectedResult = DISCORD_BOT_TOKEN;

		expect(result1).toBe(expectedResult);
		expect(result2).toBe(expectedResult);
		expect(result3).toBe(expectedResult);
	});
});
