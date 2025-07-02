import type { Snowflake } from "../../types/index.js";

/**
 * @public
 */
export class SnowflakeUtils {
	static get DISCORD_EPOCH(): bigint {
		return 1420070400000n;
	}

	static timestampFrom(snowflake: Snowflake | bigint | number): number {
		try {
			return Number((BigInt(snowflake) >> 22n) + SnowflakeUtils.DISCORD_EPOCH);
		} catch {
			throw new TypeError("The provided snowflake is not a valid number or string.");
		}
	}
}
