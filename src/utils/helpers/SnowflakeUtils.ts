import type { Snowflake } from "../../types/index.js";

const DISCORD_EPOCH_BIGINT = 1420070400000n;

/**
 * Gets the timestamp from a Snowflake.
 * @param snowflake - The snowflake to get its timestamp.
 * @returns The timestamp of the Snowflake.
 */
function timestampFrom(snowflake: Snowflake | bigint | number): number {
	try {
		const snowflakeBigInt = (BigInt(snowflake) >> 22n) + DISCORD_EPOCH_BIGINT;

		return Number(snowflakeBigInt);
	} catch {
		throw new TypeError(
			"The first parameter (snowflake) must be a valid bigint, number, or string.",
		);
	}
}

/**
 * Utilities for working with snowflakes.
 * @public
 */
export const SnowflakeUtils = Object.freeze({
	timestampFrom,
});
