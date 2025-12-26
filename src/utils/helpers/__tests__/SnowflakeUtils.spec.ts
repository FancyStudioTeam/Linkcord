/**
 * biome-ignore-all lint/style/noMagicNumbers: Magic numbers in test files may
 * be ignored.
 */

import { castSnowflake, deconstructSnowflake, getSnowflakeTimestamp, isSnowflake } from '../SnowflakeUtils.js';

const SNOWFLAKE_BIGINT = 80351110224678912n;
const SNOWFLAKE_STRING = '80351110224678912';

describe('SnowflakeUtils', () => {
	describe('castSnowflake', () => {
		it('Should throw an error if the provided parameters are invalid', () => {
			// @ts-expect-error
			expect(() => castSnowflake(null)).toThrow(/must be a bigint or string/);
		});

		it('Should throw an error if the provided string does not match the Discord Snowflake regex', () => {
			expect(() => castSnowflake('NOT_A_SNOWFLAKE')).toThrow(/does not match Discord Snowflake regex/);
		});

		it('Should cast the provided input into a Discord Snowflake', () => {
			expect(castSnowflake(SNOWFLAKE_BIGINT)).toBe('80351110224678912');
			expect(castSnowflake(SNOWFLAKE_STRING)).toBe('80351110224678912');
		});
	});

	describe('deconstructSnowflake', () => {
		it('Should throw an error if the provided parameters are invalid', () => {
			// @ts-expect-error;
			expect(() => deconstructSnowflake(null)).toThrow(/must be a Discord Snowflake/);
		});

		it('Should deconstruct the provided Discord Snowflake', () => {
			const { increment, timestamp, processId, workerId } = deconstructSnowflake(castSnowflake(SNOWFLAKE_STRING));

			expect(increment).toBe(0n);
			expect(timestamp).toBe(1439227597529n);
			expect(processId).toBe(1n);
			expect(workerId).toBe(0n);
		});
	});

	describe('isSnowflake', () => {
		it('Should return a boolean indicating whether the input is a Discord Snowflake', () => {
			expect(isSnowflake(null)).toBe(false);
			expect(isSnowflake('')).toBe(false);
			expect(isSnowflake(SNOWFLAKE_BIGINT)).toBe(false);
			expect(isSnowflake(SNOWFLAKE_STRING)).toBe(true);
		});
	});

	describe('getSnowflakeTimestamp', () => {
		it('Should throw an error if the provided parameters are invalid', () => {
			// @ts-expect-error
			expect(() => getSnowflakeTimestamp(null)).toThrow(/must be a Discord Snowflake/);
		});

		it('Should return the UNIX timestamp from the Discord Snowflake', () => {
			expect(getSnowflakeTimestamp(castSnowflake(SNOWFLAKE_STRING))).toBe(1439227597529);
		});
	});
});
