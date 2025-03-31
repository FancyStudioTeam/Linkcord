/**
 * =================================================
 * = Types referenced in the Discord API Reference =
 * =================================================
 */

/**
 * https://discord.com/developers/docs/reference#iso8601-datetime
 */
export type ISO8601Date = string;

/**
 * https://discord.com/developers/docs/reference#snowflakes
 */
export type Snowflake = string;

/**
 * =========================================
 * = Utility types used in some interfaces =
 * =========================================
 */

export type Nullable<Type> = Type | null;
export type Optional<Type> = Type | undefined;
