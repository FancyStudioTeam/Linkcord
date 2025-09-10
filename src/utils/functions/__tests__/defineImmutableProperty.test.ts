import { defineImmutableProperty } from "../defineImmutableProperty.js";

const DISCORD_BOT_TOKEN = "ANY_DISCORD_BOT_TOKEN";

describe("Function: defineImmutableProperty", () => {
	it("Should define 'token' property when using 'defineImmutableProperty' function.", () => {
		const object = {
			foo: "bar",
		};

		// Property is not defined yet.
		expect(Object.getOwnPropertyDescriptor(object, "token")).toBeUndefined();

		defineImmutableProperty(object, "token", DISCORD_BOT_TOKEN);

		const descriptor = Object.getOwnPropertyDescriptor(object, "token");

		const expectedTokenValueResult = DISCORD_BOT_TOKEN;
		const expectedTokenBooleanResult = false;

		// Check that all properties are defined and set to "false" if they are booleans.
		expect(descriptor?.value).toBe(expectedTokenValueResult);
		expect(descriptor?.configurable).toBe(expectedTokenBooleanResult);
		expect(descriptor?.enumerable).toBe(expectedTokenBooleanResult);
		expect(descriptor?.writable).toBe(expectedTokenBooleanResult);

		// If "enumerable" is "false", the property will not be listed in the "Object.keys" method.
		// Since "object" already had a "foo" property, the length should be "1".
		expect(Object.keys(object).length).toBe(1);
	});
});
