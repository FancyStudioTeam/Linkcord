import { parse } from "valibot";
import { describe, expect, it } from "vitest";
import { GatewayIntents } from "#types/index.js";
import { ConfigurationSchema } from "../ConfigurationSchema.js";

describe("Schema: ConfigurationSchema", () => {
	it("Should throw an error if the input is not a valid object.", () => {
		const InvalidInputType = null;

		expect(() => parse(ConfigurationSchema, InvalidInputType)).toThrowError();
	});

	it("Should throw an error if one of the required fields is missing.", () => {
		const InvalidInput = {
			intents: [GatewayIntents.Guilds],
			token: "ANY_DISCORD_BOT_TOKEN",
		};

		expect(() => parse(ConfigurationSchema, InvalidInput)).toThrowError();
	});
});
