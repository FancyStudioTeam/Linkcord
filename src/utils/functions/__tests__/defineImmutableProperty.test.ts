import { defineImmutableProperty } from "../defineImmutableProperty.js";

const DISCORD_BOT_TOKEN = "ANY_DISCORD_BOT_TOKEN";
const OBJECT = {
	foo: "bar",
};

describe("Function: defineImmutableProperty", () => {
	describe("GIVEN valid object, name, and value", () => {
		it("THEN define the property on the object", () => {
			const keysLengthBefore = Object.keys(OBJECT).length;
			const descriptorBefore = Object.getOwnPropertyDescriptor(OBJECT, "token");

			expect(keysLengthBefore).toBe(1);
			expect(descriptorBefore).toBeUndefined();

			defineImmutableProperty(OBJECT, "token", DISCORD_BOT_TOKEN);

			const keysLengthAfter = Object.keys(OBJECT).length;
			const descriptorAfter = Object.getOwnPropertyDescriptor(OBJECT, "token");

			expect(keysLengthAfter).toBe(1);
			expect(descriptorAfter).toBeDefined();
		});
	});

	describe("GIVEN invalid object", () => {
		it("THEN throw 'TypeError'", () => {
			const result = () => defineImmutableProperty(null, "token", DISCORD_BOT_TOKEN);
			const expectedErrorResult = new TypeError(
				"First parameter (object) from 'defineImmutableProperty' must be an object.",
			);

			expect(result).toThrow(expectedErrorResult);
		});
	});
});
