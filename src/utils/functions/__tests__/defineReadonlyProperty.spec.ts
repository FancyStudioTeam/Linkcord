import { defineReadonlyProperty } from "../defineReadonlyProperty.js";

const DISCORD_BOT_DATA = {};
const DISCORD_BOT_TOKEN = "ODAzNTExMTAyMjQ2Nzg5MTI.XXXXXXXXXX";

describe("defineReadonlyProperty", () => {
	it("Should throw an error if the provided parameters are invalid", () => {
		// @ts-expect-error
		expect(() => defineReadonlyProperty(null)).toThrow(/must be an object/);
		// @ts-expect-error
		expect(() => defineReadonlyProperty({}, null)).toThrow(/must be a string/);
	});

	it("Should throw an error if the specified object is not extensible", () => {
		const DataObject1 = {};
		const DataObject2 = {};
		const DataObject3 = {};

		Object.preventExtensions(DataObject1);
		Object.freeze(DataObject2);
		Object.seal(DataObject3);

		expect(() => defineReadonlyProperty(DataObject1, "token", DISCORD_BOT_TOKEN)).toThrow(/is not extensible/);
		expect(() => defineReadonlyProperty(DataObject2, "token", DISCORD_BOT_TOKEN)).toThrow(/is not extensible/);
		expect(() => defineReadonlyProperty(DataObject3, "token", DISCORD_BOT_TOKEN)).toThrow(/is not extensible/);
	});

	it("Should throw an error if the specified property already exists on the object", () => {
		const DataObject = {
			name: "Nelly",
		};

		expect(() => defineReadonlyProperty(DataObject, "name", "Nelly 2")).toThrow(/already has a property named/);
	});

	it("Should define the specified property with read-only descriptors", () => {
		defineReadonlyProperty(DISCORD_BOT_DATA, "token", DISCORD_BOT_TOKEN);

		const tokenPropertyDescriptor = Object.getOwnPropertyDescriptor(DISCORD_BOT_DATA, "token");

		expect(tokenPropertyDescriptor).toBeDefined();

		expect(tokenPropertyDescriptor?.configurable).toBe(false);
		expect(tokenPropertyDescriptor?.writable).toBe(false);
	});
});
