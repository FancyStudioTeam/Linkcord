import type { Snowflake } from "#types/index.js";

const DISCORD_EPOCH_BIGINT = 1420070400000n;
const DISCORD_SNOWFLAKE_REGEX = /^(?<id>\d{17,20})$/;

/**
 * Utility class for working with snowflakes.
 * @group Utils/Helpers
 */
export class SnowflakeUtils {
	/**
	 * Casts an input into a {@link Snowflake | `Snowflake`}.
	 *
	 * @param input - The input to cast.
	 * @returns The casted {@link Snowflake | `Snowflake`} input.
	 */
	static cast(input: bigint | number | string): Snowflake {
		if (typeof input === "bigint" || typeof input === "number") {
			return String(input) as Snowflake;
		}

		if (typeof input === "string") {
			const match = input.match(DISCORD_SNOWFLAKE_REGEX);

			const { groups } = match ?? {};
			const { id } = groups ?? {};

			if (!id) {
				throw new TypeError("The first parameter (input) does not match the Discord snowflake format.");
			}

			return id as Snowflake;
		}

		throw new TypeError("The first parameter (input) must be a valid bigint, number, or string.");
	}

	/**
	 * Checks whether a value is a {@link Snowflake | `Snowflake`}.
	 * @param input - The input to check.
	 */
	static isSnowflake(input: unknown): input is Snowflake {
		return typeof input === "string" && DISCORD_SNOWFLAKE_REGEX.test(input);
	}

	/**
	 * Gets the timestamp from a {@link Snowflake | `Snowflake`} input.
	 *
	 * @param snowflake - The {@link Snowflake | `Snowflake`} input to get its timestamp.
	 * @returns The timestamp of the {@link Snowflake | `Snowflake`} input.
	 */
	static timestampFrom(snowflake: Snowflake): number {
		if (!SnowflakeUtils.isSnowflake(snowflake)) {
			throw new TypeError("The first parameter (snowflake) must be a valid snowflake.");
		}

		const snowflakeBigInt = (BigInt(snowflake) >> 22n) + DISCORD_EPOCH_BIGINT;

		return Number(snowflakeBigInt);
	}
}
