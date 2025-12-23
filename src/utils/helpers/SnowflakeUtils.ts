import type { Snowflake } from "#types/index.js";
import { isBigInt, isString } from "./AssertionUtils.js";

const DISCORD_EPOCH_BIGINT = 1420070400000n;
const DISCORD_SNOWFLAKE_REGEX = /^(?<id>\d{17,20})$/;

export function castSnowflake<Input extends bigint | number | string>(input: Input): Snowflake {
	if (!(isBigInt(input) || isString(input))) {
		throw new TypeError("First parameter (input) from castSnowflake must be a bigint or string");
	}

	const snowflakeString = String(input);

	if (!isSnowflake(snowflakeString)) {
		throw new TypeError("First parameter (input) from castSnowflake does not match Discord Snowflake regex");
	}

	return snowflakeString;
}

/**
 * @see https://discord.com/developers/docs/reference#convert-snowflake-to-datetime
 */
export function getSnowflakeTimestamp(snowflake: Snowflake): number {
	if (!isSnowflake(snowflake)) {
		throw new TypeError("First parameter (snowflake) from getSnowflakeTimestamp must be a Discord Snowflake");
	}

	const snowflakeBigInt = (BigInt(snowflake) >> 22n) + DISCORD_EPOCH_BIGINT;

	return Number(snowflakeBigInt);
}

export function isSnowflake(input: unknown): input is Snowflake {
	return isString(input) && DISCORD_SNOWFLAKE_REGEX.test(input);
}
