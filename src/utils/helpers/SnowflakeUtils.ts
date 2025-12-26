import type { Snowflake } from '#types/index.js';
import { isBigInt, isString } from './AssertionUtils.js';
import type { DeconstructedSnowflake } from './SnowflakeUtils.types.js';

const DISCORD_EPOCH_BIGINT = 1420070400000n;
const DISCORD_SNOWFLAKE_REGEX = /^(?<id>\d{17,20})$/;

export function castSnowflake<Input extends bigint | number | string>(input: Input): Snowflake {
	if (!(isBigInt(input) || isString(input))) {
		throw new TypeError('First parameter (input) from castSnowflake must be a bigint or string');
	}

	const snowflakeString = String(input);

	if (!isSnowflake(snowflakeString)) {
		throw new TypeError('First parameter (input) from castSnowflake does not match Discord Snowflake regex');
	}

	return snowflakeString;
}

/**
 * @see https://discord.com/developers/docs/reference#snowflakes-snowflake-id-format-structure-left-to-right
 */
export function deconstructSnowflake(snowflake: Snowflake): DeconstructedSnowflake {
	if (!isSnowflake(snowflake)) {
		throw new TypeError('First parameter (snowflake) from deconstructSnowflake must be a Discord Snowflake');
	}

	const snowflakeBigInt = BigInt(snowflake);

	const increment = snowflakeBigInt & 0xfffn;
	const timestamp = (snowflakeBigInt >> 22n) + DISCORD_EPOCH_BIGINT;
	const processId = (snowflakeBigInt & 0x1f000n) >> 12n;
	const workerId = (snowflakeBigInt & 0x3e0000n) >> 17n;

	return {
		increment,
		processId,
		timestamp,
		workerId,
	};
}

/**
 * @see https://discord.com/developers/docs/reference#convert-snowflake-to-datetime
 */
export function getSnowflakeTimestamp(snowflake: Snowflake): number {
	const { timestamp } = deconstructSnowflake(snowflake);
	const timestampNumber = Number(timestamp);

	return timestampNumber;
}

export function isSnowflake(input: unknown): input is Snowflake {
	return isString(input) && DISCORD_SNOWFLAKE_REGEX.test(input);
}
