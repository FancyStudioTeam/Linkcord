import { defineImmutableProperty } from "../defineImmutableProperty.js";

const DISCORD_BOT_DATA = {
	username: "Nelly",
};
const DISCORD_BOT_TOKEN = "ODAzNTExMTAyMjQ2Nzg5MTI.XXXXXXXXXX";

describe("Function: defineImmutableProperty", () => {
	it("Should define the property as immutable in the provided object", () => {
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

	it("Should throw a TypeError if any of the provided parameters are not valid", () => {
		// @ts-expect-error
		const result1 = () => defineImmutableProperty(null);
		// @ts-expect-error
		const result2 = () => defineImmutableProperty(DISCORD_BOT_DATA, null);

		const expectedErrorResult1 = new TypeError(
			"First parameter (object) from 'defineImmutableProperty' must be an object",
		);
		const expectedErrorResult2 = new TypeError(
			"Second parameter (propertyName) from 'defineImmutableProperty' must be a string",
		);

		expect(result1).toThrow(expectedErrorResult1);
		expect(result2).toThrow(expectedErrorResult2);
	});
});
