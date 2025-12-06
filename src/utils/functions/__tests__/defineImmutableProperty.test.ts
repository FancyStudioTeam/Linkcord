import { defineImmutableProperty } from "../defineImmutableProperty.js";

const DISCORD_BOT_DATA = {
	username: "Nelly",
};
const DISCORD_BOT_TOKEN = "ODAzNTExMTAyMjQ2Nzg5MTI.XXXXXXXXXX";

describe("Function: defineImmutableProperty", () => {
	describe("GIVEN valid parameters", () => {
		describe("WHEN calling defineImmutableProperty", () => {
			it("THEN should define the property as immutable", () => {
				const keysLengthBefore = Object.keys(DISCORD_BOT_DATA).length;
				const descriptorBefore = Object.getOwnPropertyDescriptor(DISCORD_BOT_DATA, "token");

				expect(keysLengthBefore).toBe(1);
				expect(descriptorBefore).toBeUndefined();

				defineImmutableProperty(DISCORD_BOT_DATA, "token", DISCORD_BOT_TOKEN);

				const keysLengthAfter = Object.keys(DISCORD_BOT_DATA).length;
				const descriptorAfter = Object.getOwnPropertyDescriptor(DISCORD_BOT_DATA, "token");

				expect(keysLengthAfter).toBe(1);
				expect(descriptorAfter).toBeDefined();
			});
		});
	});

	describe("GIVEN invalid parameters", () => {
		describe("WHEN calling defineImmutableProperty", () => {
			it("THEN a TypeError is thrown", () => {
				// @ts-expect-error
				expect(() => defineImmutableProperty(null)).toThrow(
					"First parameter (parent) from 'defineImmutableProperty' must be an object",
				);
				// @ts-expect-error
				expect(() => defineImmutableProperty(DISCORD_BOT_DATA, null)).toThrow(
					"Second parameter (name) from 'defineImmutableProperty' must be a string",
				);
			});
		});
	});
});
