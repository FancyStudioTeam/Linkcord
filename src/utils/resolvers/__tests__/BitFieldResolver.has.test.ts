import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.freeze", () => {
	let bitFieldResolver: BitFieldResolver;

	beforeEach(() => {
		bitFieldResolver = new BitFieldResolver(UserFlags.Staff | UserFlags.ActiveDeveloper);
	});

	describe("GIVEN valid bit", () => {
		it("THEN returns 'true'", () => {
			const result = bitFieldResolver.has(UserFlags.Staff);
			const expectedResult = true;

			expect(result).toBe(expectedResult);
		});
	});

	describe("GIVEN invalid bit", () => {
		it("THEN returns 'false'", () => {
			const result = bitFieldResolver.has(UserFlags.HypeSquad);
			const expectedResult = false;

			expect(result).toBe(expectedResult);
		});
	});
});
