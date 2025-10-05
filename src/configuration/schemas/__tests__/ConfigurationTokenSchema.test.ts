import { describe, expect, it } from "vitest";
import { validate } from "#utils/functions/validate.js";
import { ValidationError } from "#utils/index.js";
import { ConfigurationTokenSchema } from "../ConfigurationSchema.js";

const DISCORD_TOKEN = "ODAzNTExMTAyMjQ2Nzg5MTI.XXXXXXXXXX";

describe("Schema: ConfigurationTokenSchema", () => {
	it("GIVEN a Zod schema WHEN validating valid input THEN does not throw", () => {
		expect(() => validate(ConfigurationTokenSchema, DISCORD_TOKEN)).not.toThrow(ValidationError);
	});

	it("GIVEN a Zod schema WHEN validating invalid input THEN does throw", () => {
		expect(() => validate(ConfigurationTokenSchema, null)).toThrow(ValidationError);
	});
});
