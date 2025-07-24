import * as v from "valibot";
import { describe, expect, it } from "vitest";
import { ConfigurationSchema } from "../ConfigurationSchema.js";

describe("Schema: ConfigurationSchema", () => {
	it("Throws an error when the configuration is empty.", () =>
		expect(() => v.parse(ConfigurationSchema, {})).toThrowError());
});
