import type { Snowflake } from "#types/index.js";
import { AssertionUtils } from "./AssertionUtils.js";

const { isBigInt, isNumber, isString } = AssertionUtils;

const DISCORD_EPOCH_BIGINT = 1420070400000n;
const DISCORD_SNOWFLAKE_REGEX = /^(?<id>\d{17,20})$/;

function cast<Input extends bigint | number | string>(input: Input): Snowflake {
	if (!(isBigInt(input) && isNumber(input) && isString(input))) {
		throw new TypeError("First parameter (input) from 'SnowflakeUtils.cast' must be a bigint, number, or string");
	}

	const snowflakeString = String(input);

	if (!isSnowflake(snowflakeString)) {
		throw new TypeError(
			"First parameter (input) from 'SnowflakeUtils.cast' does not match Discord Snowflake regex",
		);
	}

	return snowflakeString;
}

function isSnowflake(input: unknown): input is Snowflake {
	return typeof input === "string" && DISCORD_SNOWFLAKE_REGEX.test(input);
}

function timestampFrom(snowflake: Snowflake): number {
	if (!isSnowflake(snowflake)) {
		throw new TypeError("First parameter (snowflake) from 'SnowflakeUtils.timestampFrom' must be a snowflake");
	}

	const snowflakeBigInt = (BigInt(snowflake) >> 22n) + DISCORD_EPOCH_BIGINT;

	return Number(snowflakeBigInt);
}

export const SnowflakeUtils = Object.freeze({
	cast,
	isSnowflake,
	timestampFrom,
});
