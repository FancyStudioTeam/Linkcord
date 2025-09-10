import { defineImmutableProperty } from "../defineImmutableProperty.js";

describe("Function: defineImmutableProperty", () => {
	it("Should define 'token' property when using 'defineImmutableProperty' function.", () => {
		const object = {};
		const tokenValue = "ANY_DISCORD_BOT_TOKEN";

		// Get the property descriptor of the token property before defining it.
		const tokenPropertyDescriptor1 = Object.getOwnPropertyDescriptor(object, "token");

		expect(tokenPropertyDescriptor1?.value).toBe(undefined);

		defineImmutableProperty(object, "token", tokenValue);

		// Get the property descriptor of the token property after defining it.
		const tokenPropertyDescriptor2 = Object.getOwnPropertyDescriptor(object, "token");
		const expectedTokenValueResult = tokenValue;

		expect(tokenPropertyDescriptor2?.value).toBe(expectedTokenValueResult);
	});
});
