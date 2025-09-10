import { defineImmutableProperty } from "../defineImmutableProperty.js";

describe("Function: defineImmutableProperty", () => {
	it("Should define 'token' property when using 'defineImmutableProperty' function.", () => {
		const object = {};
		const tokenValue = "ANY_DISCORD_BOT_TOKEN";

		expect(Object.getOwnPropertyDescriptor(object, "token")).toBeUndefined();

		defineImmutableProperty(object, "token", tokenValue);

		const descriptorObject = Object.getOwnPropertyDescriptor(object, "token");

		const expectedTokenValueResult = tokenValue;
		const expectedTokenBooleanResult = false;

		expect(descriptorObject?.value).toBe(expectedTokenValueResult);

		expect(descriptorObject?.configurable).toBe(expectedTokenBooleanResult);
		expect(descriptorObject?.enumerable).toBe(expectedTokenBooleanResult);
		expect(descriptorObject?.writable).toBe(expectedTokenBooleanResult);
	});
});
