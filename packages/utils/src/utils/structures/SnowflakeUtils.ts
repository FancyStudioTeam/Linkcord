import type { Snowflake } from "@fancystudioteam/linkcord-types";

/**
 * A static class containing utility methods for working with snowflakes.
 *
 * @public
 */
export class SnowflakeUtils {
  /**
   * Gets the Discord epoch.
   *
   * @returns The Discord epoch.
   */
  static get DISCORD_EPOCH(): bigint {
    return 1420070400000n;
  }

  /**
   * Gets the timestamp of the snowflake.
   *
   * @param snowflake - The snowflake to get its timestamp.
   * @returns The timestamp of the snowflake.
   */
  static timestampFrom(snowflake: Snowflake | bigint | number): number {
    try {
      return Number((BigInt(snowflake) >> 22n) + SnowflakeUtils.DISCORD_EPOCH);
    } catch {
      throw new TypeError("The provided snowflake is not a valid number or string.");
    }
  }
}
