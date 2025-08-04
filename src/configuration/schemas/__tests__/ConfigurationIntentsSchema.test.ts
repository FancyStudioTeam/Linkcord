import { parse } from "valibot";
import { describe, expect, it } from "vitest";
import { INVALID_INPUT_VALUE_TYPE } from "#errors/messages/Validations.js";
import { ConfigurationIntentsSchema } from "../ConfigurationSchema.js";

describe("Schema: ConfigurationIntentsSchema", () => {
	it("Should throw an error if the input is not an array.", () => {
		const InvalidInputType = null;

		expect(() => parse(ConfigurationIntentsSchema, InvalidInputType)).toThrowError(
			INVALID_INPUT_VALUE_TYPE("intents", "array", InvalidInputType),
		);
	});
});
