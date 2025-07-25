import { describe, expect, it } from "vitest";
import { INVALID_CONFIGURATION_INPUT } from "#errors/messages.js";
import { GatewayIntents } from "#types/index.js";
import { defineConfig } from "../defineConfig.js";

describe("Function: defineConfig", () => {
	it("Should throw an error if the configuration is not an object.", () => {
		const InvalidConfigurationInputType = true;

		// @ts-expect-error
		expect(() => defineConfig(InvalidConfigurationInputType)).toThrow(
			INVALID_CONFIGURATION_INPUT(),
		);
	});

	it("Should throw an error if the configuration is an empty object.", () => {
		const EmptyConfigurationInput = {};

		// @ts-expect-error
		expect(() => defineConfig(EmptyConfigurationInput)).toThrow(INVALID_CONFIGURATION_INPUT());
	});

	it("Should throw an error if the token is not a string.", () => {
		const MissingIntentsConfigurationInput = {
			token: "DISCORD_TOKEN",
		};

		// @ts-expect-error
		expect(() => defineConfig(MissingIntentsConfigurationInput)).toThrow(
			INVALID_CONFIGURATION_INPUT(),
		);
	});

	it("Should return the configuration if it is valid.", () => {
		const ValidConfigurationInput = {
			intents: [GatewayIntents.Guilds],
			token: "DISCORD_TOKEN",
		};

		expect(defineConfig(ValidConfigurationInput)).toEqual(ValidConfigurationInput);
	});
});
