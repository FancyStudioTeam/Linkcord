import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.has", () => {
	it("Should check whether the provided bit is present in the bit field", () => {
		const bitFieldResolver = new BitFieldResolver(UserFlags.Staff);

		const result1 = bitFieldResolver.has(UserFlags.Staff);
		const result2 = bitFieldResolver.has(UserFlags.HypeSquad);

		const expectedResult1 = true;
		const expectedResult2 = false;

		expect(result1).toBe(expectedResult1);
		expect(result2).toBe(expectedResult2);
	});
});
