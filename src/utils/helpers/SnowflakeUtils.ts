import type { Snowflake } from "#types/index.js";

const DISCORD_EPOCH_BIGINT = 1420070400000n;
const DISCORD_SNOWFLAKE_REGEX = /^(?<id>\d{17,20})$/;

/**
 * Utility class for working with Discord Snowflakes.
 * @group Utils/Helpers
 */
export class SnowflakeUtils {
	/**
	 * Casts an input into a {@link Snowflake | `Snowflake`} string.
	 *
	 * @param input - The input to cast.
	 * @returns The casted {@link Snowflake | `Snowflake`} string.
	 */
	static cast(input: bigint | number | string): Snowflake {
		if (!(typeof input === "bigint" || typeof input === "number" || typeof input === "string")) {
			throw new TypeError("The first parameter (input) must be a valid bigint, number, or string.");
		}

		const snowflakeString = String(input);

		if (!SnowflakeUtils.isSnowflake(snowflakeString)) {
			throw new TypeError("The first parameter (input) does not match the Discord Snowflake regex.");
		}

		return snowflakeString;
	}

	/**
	 * Checks whether a value is a valid {@link Snowflake | `Snowflake`} string.
	 *
	 * @param input - The input to check.
	 * @returns Whether the input is a valid {@link Snowflake | `Snowflake`} string.
	 */
	static isSnowflake(input: unknown): input is Snowflake {
		return typeof input === "string" && DISCORD_SNOWFLAKE_REGEX.test(input);
	}

	/**
	 * Gets the timestamp from a {@link Snowflake | `Snowflake`} string.
	 *
	 * @param snowflake - The {@link Snowflake | `Snowflake`} string to get its timestamp.
	 * @returns The timestamp of the {@link Snowflake | `Snowflake`} string.
	 */
	static timestampFrom(snowflake: Snowflake): number {
		if (!SnowflakeUtils.isSnowflake(snowflake)) {
			throw new TypeError("The first parameter (snowflake) must be a valid Snowflake.");
		}

		const snowflakeBigInt = (BigInt(snowflake) >> 22n) + DISCORD_EPOCH_BIGINT;

		return Number(snowflakeBigInt);
	}
}
