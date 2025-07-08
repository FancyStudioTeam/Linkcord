/**
 * biome-ignore-all lint/nursery/noMagicNumbers: Expected number values can be
 * magic numbers.
 */

import { describe, expect, it } from "vitest";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

describe("Class: SnowflakeUtils", () => {
	describe("Getter: DISCORD_EPOCH", () =>
		it("Returns the Discord epoch.", () => {
			expect(SnowflakeUtils.DISCORD_EPOCH).toBe(1420070400000n);
		}));

	describe("Method: timestampFrom", () => {
		it("Returns the timestamp of the snowflake.", () => {
			expect(SnowflakeUtils.timestampFrom("175928847299117063")).toBe(1462015105796);
			expect(SnowflakeUtils.timestampFrom(175928847299117063n)).toBe(1462015105796);
		});

		it("Throws a 'TypeError' when the snowflake is not valid number or string.", () => {
			// @ts-expect-error
			expect(() => SnowflakeUtils.timestampFrom(null)).toThrow(
				"The provided snowflake is not a valid number or string.",
			);
			expect(() => SnowflakeUtils.timestampFrom("NOT_A_VALID_STRINGIFIED_SNOWFLAKE")).toThrow(
				"The provided snowflake is not a valid number or string.",
			);
		});
	});
});
