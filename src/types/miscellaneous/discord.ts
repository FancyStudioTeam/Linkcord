import type { Brand } from "#utils/index.js";
import type { Locales } from "./enums.js";

/**
 * Represents the available versions of the Discord API.
 * @see https://discord.com/developers/docs/reference#api-versioning-api-versions
 */
export type APIVersion = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Represents the URI of an audio file.
 * @see https://discord.com/developers/docs/reference#image-data
 */
export type AudioDataURI = `data:audio/mpeg;base64,${string}` | `data:audio/ogg;base64,${string}`;

/**
 * Represents the URI of an image file.
 * @see https://discord.com/developers/docs/reference#image-data
 */
export type ImageDataURI =
	| `data:image/jpeg;base64,${string}`
	| `data:image/png;base64,${string}`
	| `data:image/gif;base64,${string}`;

/**
 * Represents an ISO 8601 date.
 * @see https://discord.com/developers/docs/reference#iso8601-datetime
 */
export type ISO8601Date = string;

/**
 * Represents a map of locales with their localized names.
 * @see https://discord.com/developers/docs/reference#locales
 */
export type LocalesMap = {
	[Key in Locales]: string;
};

/**
 * Represents the locales for an application command.
 * @see https://discord.com/developers/docs/reference#locales
 */
export type Localizations = Partial<LocalesMap>;

/**
 * Represents a Discord snowflake.
 * @see https://discord.com/developers/docs/reference#snowflakes
 */
export type Snowflake = Brand<string, "Snowflake">;

/**
 * Represents the available versions of the Discord voice API.
 * @see https://discord.com/developers/docs/topics/voice-connections#voice-gateway-versioning-gateway-versions
 */
export type VoiceVersion = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
