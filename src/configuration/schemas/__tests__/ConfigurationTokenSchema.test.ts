import { parse } from "valibot";
import { describe, expect, it } from "vitest";
import { ConfigurationTokenSchema } from "../ConfigurationSchema.js";

describe("Schema: ConfigurationTokenSchema", () => {
	it("Should throw an error if the input is not a string.", () => {
		const InvalidInputType = null;

		expect(() => parse(ConfigurationTokenSchema, InvalidInputType)).toThrowError();
	});
});
