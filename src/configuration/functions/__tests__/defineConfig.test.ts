import { describe, expect, it } from "vitest";
import { INVALID_CONFIGURATION_INPUT } from "#errors/messages.js";
import { GatewayIntents } from "#types/index.js";
import { defineConfig } from "../defineConfig.js";

describe("Function: defineConfig", () => {
	it("Should throw an error if the given options are not a valid object.", () => {
		const InvalidConfigurationInputType = true;

		// @ts-expect-error
		expect(() => defineConfig(InvalidConfigurationInputType)).toThrow(
			INVALID_CONFIGURATION_INPUT(),
		);
	});

	it("Should throw an error if the given options are an empty object.", () => {
		const EmptyConfigurationInput = {};

		// @ts-expect-error
		expect(() => defineConfig(EmptyConfigurationInput)).toThrow(INVALID_CONFIGURATION_INPUT());
	});

	it("Should throw an error if one of the required fields is missing.", () => {
		const MissingIntentsConfigurationInput = {
			token: "DISCORD_TOKEN",
		};
		const MissingTokenConfigurationInput = {
			intents: [GatewayIntents.Guilds],
		};

		// @ts-expect-error
		expect(() => defineConfig(MissingIntentsConfigurationInput)).toThrow(
			INVALID_CONFIGURATION_INPUT(),
		);
		// @ts-expect-error
		expect(() => defineConfig(MissingTokenConfigurationInput)).toThrow(
			INVALID_CONFIGURATION_INPUT(),
		);
	});

	it("Should throw an error if the given intents value is not a valid array.", () => {
		const NumericIntentsConfigurationInput = {
			intents: GatewayIntents.Guilds,
			token: "DISCORD_TOKEN",
		};
		const BooleanItemIntentsConfigurationInput = {
			intents: [GatewayIntents.Guilds, true],
			token: "DISCORD_TOKEN",
		};
		const EmptyIntentsConfigurationInput = {
			intents: [],
			token: "DISCORD_TOKEN",
		};

		// @ts-expect-error
		expect(() => defineConfig(NumericIntentsConfigurationInput)).toThrow(
			INVALID_CONFIGURATION_INPUT(),
		);
		// @ts-expect-error
		expect(() => defineConfig(BooleanItemIntentsConfigurationInput)).toThrow(
			INVALID_CONFIGURATION_INPUT(),
		);
		expect(() => defineConfig(EmptyIntentsConfigurationInput)).toThrow(
			INVALID_CONFIGURATION_INPUT(),
		);
	});

	it("Should throw an error if the given token value is not a valid string.", () => {
		const BooleanTokenConfigurationInput = {
			intents: [GatewayIntents.Guilds],
			token: true,
		};

		// @ts-expect-error
		expect(() => defineConfig(BooleanTokenConfigurationInput)).toThrow(
			INVALID_CONFIGURATION_INPUT(),
		);
	});

	it("Should return the given options if they are valid.", () => {
		const ValidConfigurationInput = {
			intents: [GatewayIntents.Guilds],
			token: "DISCORD_TOKEN",
		};
		const ExpectedConfigurationOutput = {
			intents: GatewayIntents.Guilds,
			token: "DISCORD_TOKEN",
		};

		expect(defineConfig(ValidConfigurationInput)).toEqual(ExpectedConfigurationOutput);
	});
});
