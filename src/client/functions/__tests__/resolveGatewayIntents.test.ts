import { describe, expect, it } from "vitest";
import { GatewayIntents } from "../../../types/discord/index.js";
import { resolveGatewayIntents } from "../resolveGatewayIntents.js";

describe("Function: resolveGatewayIntents", () => {
	it("Given an array of string intents, returns the resolved intents.", () =>
		expect(resolveGatewayIntents(["Guilds", "MessageContent"])).toBe(32769));

	it("Given an array of number intents, returns the resolved intents.", () =>
		expect(resolveGatewayIntents([GatewayIntents.Guilds, GatewayIntents.MessageContent])).toBe(
			32769,
		));

	it("Given an array of number and string intents, returns the resolved intents.", () =>
		// @ts-expect-error
		expect(resolveGatewayIntents([GatewayIntents.Guilds, "MessageContent"])).toBe(32769));

	it("Given an array of number and string intents including an invalid string intent, throws a 'TypeError'.", () =>
		// @ts-expect-error
		expect(() => resolveGatewayIntents(["Guilds", "MessageContent", "INVALID_INTENT"])).toThrow(
			"Intent 'INVALID_INTENT' is not a valid string intent.",
		));
});
