/**
 * @see https://discord.com/developers/docs/reference#snowflakes-snowflake-id-format-structure-left-to-right
 */
export interface DeconstructedSnowflake {
	increment: bigint;
	processId: bigint;
	timestamp: bigint;
	workerId: bigint;
}
