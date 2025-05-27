import { describe, expect, it } from "vitest";
import { SnowflakeUtils } from "../SnowflakeUtils.js";

describe("Class: SnowflakeUtils", () => {
  describe("Getter: DISCORD_EPOCH", () =>
    it("Returns the Discord epoch.", () => {
      expect(SnowflakeUtils.DISCORD_EPOCH).toBe(1420070400000n);
    }));

  describe("Method: timestampFrom", () => {
    it("Returns the timestamp of the snowflake.", () => {
      const expectedResult = 1462015105796;

      expect(SnowflakeUtils.timestampFrom("175928847299117063")).toBe(expectedResult);
      expect(SnowflakeUtils.timestampFrom(Number("175928847299117063"))).toBe(expectedResult);
      expect(SnowflakeUtils.timestampFrom(BigInt("175928847299117063"))).toBe(expectedResult);
    });

    it("Throws an error when the snowflake is not valid.", () => {
      const expectedErrorMessage = "The snowflake is not valid.";

      // @ts-expect-error
      expect(() => SnowflakeUtils.timestampFrom(null)).toThrow(expectedErrorMessage);
      // @ts-expect-error
      expect(() => SnowflakeUtils.timestampFrom(undefined)).toThrow(expectedErrorMessage);
      expect(() => SnowflakeUtils.timestampFrom("NOT_A_STRINGIFIED_SNOWFLAKE")).toThrow(expectedErrorMessage);
    });
  });
});
