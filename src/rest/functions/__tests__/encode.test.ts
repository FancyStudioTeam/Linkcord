import { describe, expect, it } from "vitest";
import { encode } from "../encode.js";

const GUILD_ID = "197038439483310086";

describe("Function: encode", () => {
	it("Should encode the provided enpoints", () => {
		const result1 = encode`/messages/${"Hello, world"}`;
		const result2 = encode`/guilds/${GUILD_ID}`;

		const expectedResult1 = "/messages/Hello%2C%20world";
		const expectedResult2 = "/guilds/197038439483310086";

		expect(result1).toBe(expectedResult1);
		expect(result2).toBe(expectedResult2);
	});
});
