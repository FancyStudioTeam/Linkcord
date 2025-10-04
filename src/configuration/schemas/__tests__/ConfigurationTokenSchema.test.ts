import { describe, expect, it } from "vitest";
import { ConfigurationTokenSchema } from "../ConfigurationSchema.js";

const DISCORD_TOKEN = "ODAzNTExMTAyMjQ2Nzg5MTI.XXXXXXXXXX";
describe("Schema: ConfigurationTokenSchema", () => {
	it("GIVEN a Zod schema WHEN validating valid input THEN does not throw", () => {
		expect(() => ConfigurationTokenSchema.parse(DISCORD_TOKEN)).not.toThrow();
	});

	it("GIVEN a Zod schema WHEN validating invalid input THEN does throw", () => {
		expect(() => ConfigurationTokenSchema.parse(null)).toThrow();
	});
});
