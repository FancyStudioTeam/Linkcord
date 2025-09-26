import { UserFlags } from "#types/index.js";
import { BitFieldResolver } from "../BitFieldResolver.js";

describe("Method: BitFieldResolver.remove", () => {
	let bitFieldResolver: BitFieldResolver;

	beforeEach(() => {
		bitFieldResolver = new BitFieldResolver(UserFlags.Staff | UserFlags.ActiveDeveloper);
	});

	describe("GIVEN valid bits", () => {
		describe("WHEN removing 0 with bitfield 4194305", () => {
			it("THEN returns bitfield 4194305", () => {
				const result = bitFieldResolver.remove(0);
				const expectedResult = 4194305;

				expect(result).toBe(expectedResult);
			});
		});

		describe("WHEN removing 'UserFlags.Staff' with bitfield 4194305", () => {
			it("THEN returns bitfield 4194304", () => {
				const result = bitFieldResolver.remove(UserFlags.Staff);
				const expectedResult = UserFlags.ActiveDeveloper;

				expect(result).toBe(expectedResult);
			});
		});

		describe("WHEN removing 'UserFlags.Staff' and 'UserFlags.ActiveDeveloper' with bitfield 4194305", () => {
			it("THEN returns bitfield 0", () => {
				const result = bitFieldResolver.remove(UserFlags.Staff, UserFlags.ActiveDeveloper);
				const expectedResult = 0;

				expect(result).toBe(expectedResult);
			});
		});
	});
});
