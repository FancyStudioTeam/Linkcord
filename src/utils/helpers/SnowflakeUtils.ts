import type { Snowflake } from "#types/index.js";

const DISCORD_EPOCH_BIGINT = 1420070400000n;
const DISCORD_SNOWFLAKE_REGEX = /^(?<id>\d{17,20})$/;

/**
 * Utility class for working with Discord Snowflakes.
 * @group Utils/Helpers
 */
export class SnowflakeUtils {
	/**
	 * Casts an input into a {@link Snowflake | `Snowflake`}.
	 *
	 * @param input - The input to cast.
	 * @returns The casted {@link Snowflake | `Snowflake`} input.
	 *
	 * @example
	 * ```ts
	 * SnowflakeUtils.cast(80351110224678912); // -> "80351110224678912" (Snowflake)
	 * SnowflakeUtils.cast(80351110224678912n); // -> "80351110224678912" (Snowflake)
	 * SnowflakeUtils.cast("80351110224678912"); // -> "80351110224678912" (Snowflake)
	 * SnowflakeUtils.cast(null); // -> TypeError
	 * ```
	 */
	static cast(input: bigint | number | string): Snowflake {
		let snowflakeString: string;

		if (typeof input === "bigint" || typeof input === "number") {
			snowflakeString = String(input);
		} else if (typeof input === "string") {
			snowflakeString = input;
		} else {
			throw new TypeError("The first parameter (input) must be a valid bigint, number, or string.");
		}

		if (!SnowflakeUtils.isSnowflake(snowflakeString)) {
			throw new TypeError("The first parameter (input) does not match the Discord Snowflake regex.");
		}

		return snowflakeString;
	}

	/**
	 * Checks whether a value is a {@link Snowflake | `Snowflake`}.
	 * @param input - The input to check.
	 *
	 * @example
	 * ```ts
	 * SnowflakeUtils.isSnowflake("80351110224678912"); // -> true
	 * SnowflakeUtils.isSnowflake(80351110224678912); // -> false
	 * ```
	 */
	static isSnowflake(input: unknown): input is Snowflake {
		return typeof input === "string" && DISCORD_SNOWFLAKE_REGEX.test(input);
	}

	/**
	 * Gets the timestamp from a {@link Snowflake | `Snowflake`} input.
	 *
	 * @param snowflake - The {@link Snowflake | `Snowflake`} input to get its timestamp.
	 * @returns The timestamp of the {@link Snowflake | `Snowflake`} input.
	 *
	 * @example
	 * ```ts
	 * SnowflakeUtils.timestampFrom("80351110224678912"); // -> 1439227597529
	 * SnowflakeUtils.timestampFrom(null); // -> TypeError
	 * ```
	 */
	static timestampFrom(snowflake: Snowflake): number {
		if (!SnowflakeUtils.isSnowflake(snowflake)) {
			throw new TypeError("The first parameter (snowflake) must be a valid snowflake.");
		}

		const snowflakeBigInt = (BigInt(snowflake) >> 22n) + DISCORD_EPOCH_BIGINT;

		return Number(snowflakeBigInt);
	}
}
