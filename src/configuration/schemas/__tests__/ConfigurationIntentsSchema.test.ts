import { parse } from "valibot";
import { describe, expect, it } from "vitest";
import { ConfigurationIntentsSchema } from "../ConfigurationSchema.js";

describe("Schema: ConfigurationIntentsSchema", () => {
	it("Should throw an error if the input is not a valid array.", () => {
		const InvalidInputType = null;

		expect(() => parse(ConfigurationIntentsSchema, InvalidInputType)).toThrowError();
	});
});
