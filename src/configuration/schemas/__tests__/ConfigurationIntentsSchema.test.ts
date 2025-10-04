import { describe, expect, it } from "vitest";
import { GatewayIntents } from "#types/index.js";
import { ConfigurationIntentsSchema } from "../ConfigurationSchema.js";

const GUILDS_INTENT_NUMBER = 1;
const MESSAGE_CONTENT_INTENT_NUMBER = 32768;

describe("Schema: ConfigurationIntentsSchema", () => {
	it("GIVEN a Zod schema WHEN validating valid input THEN does not throw", () => {
		expect(() =>
			ConfigurationIntentsSchema.parse([GatewayIntents.Guilds, GatewayIntents.MessageContent]),
		).not.toThrow();
		expect(() =>
			ConfigurationIntentsSchema.parse([GUILDS_INTENT_NUMBER, MESSAGE_CONTENT_INTENT_NUMBER]),
		).not.toThrow();
	});

	it("GIVEN a Zod schema WHEN validating invalid input THEN does throw", () => {
		expect(() => ConfigurationIntentsSchema.parse(null)).toThrow();
		expect(() => ConfigurationIntentsSchema.parse([])).toThrow();
		expect(() => ConfigurationIntentsSchema.parse([null])).toThrow();
		expect(() => ConfigurationIntentsSchema.parse([0])).toThrow();
	});
});
