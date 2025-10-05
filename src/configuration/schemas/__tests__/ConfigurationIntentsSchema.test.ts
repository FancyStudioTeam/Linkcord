import { describe, expect, it } from "vitest";
import { GatewayIntents } from "#types/index.js";
import { validate } from "#utils/functions/validate.js";
import { ValidationError } from "#utils/index.js";
import { ConfigurationIntentsSchema } from "../ConfigurationSchema.js";

const GUILDS_INTENT_NUMBER = 1;
const MESSAGE_CONTENT_INTENT_NUMBER = 32768;

describe("Schema: ConfigurationIntentsSchema", () => {
	it("GIVEN a Zod schema WHEN validating valid input THEN does not throw", () => {
		expect(() =>
			validate(ConfigurationIntentsSchema, [GatewayIntents.Guilds, GatewayIntents.MessageContent]),
		).not.toThrow(ValidationError);
		expect(() =>
			validate(ConfigurationIntentsSchema, [GUILDS_INTENT_NUMBER, MESSAGE_CONTENT_INTENT_NUMBER]),
		).not.toThrow(ValidationError);
	});

	it("GIVEN a Zod schema WHEN validating invalid input THEN does throw", () => {
		expect(() => validate(ConfigurationIntentsSchema, null)).toThrow(ValidationError);
		expect(() => validate(ConfigurationIntentsSchema, [])).toThrow(ValidationError);
		expect(() => validate(ConfigurationIntentsSchema, [null])).toThrow(ValidationError);
		expect(() => validate(ConfigurationIntentsSchema, [0])).toThrow(ValidationError);
	});
});
