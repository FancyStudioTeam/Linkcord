/**
 * @public
 * @see https://discord.com/developers/docs/reference#locales
 */
export interface Locales {
  [Locale.Bulgarian]: string;
  [Locale.ChineseCN]: string;
  [Locale.ChineseTW]: string;
  [Locale.Croatian]: string;
  [Locale.Czech]: string;
  [Locale.Danish]: string;
  [Locale.Dutch]: string;
  [Locale.EnglishUK]: string;
  [Locale.EnglishUS]: string;
  [Locale.Finnish]: string;
  [Locale.French]: string;
  [Locale.German]: string;
  [Locale.Greek]: string;
  [Locale.Hindi]: string;
  [Locale.Hungarian]: string;
  [Locale.Indonesian]: string;
  [Locale.Italian]: string;
  [Locale.Japanese]: string;
  [Locale.Korean]: string;
  [Locale.Lithuanian]: string;
  [Locale.Norwegian]: string;
  [Locale.Polish]: string;
  [Locale.PortugueseBR]: string;
  [Locale.Romanian]: string;
  [Locale.Russian]: string;
  [Locale.SpanishES]: string;
  [Locale.SpanishLATAM]: string;
  [Locale.Swedish]: string;
  [Locale.Thai]: string;
  [Locale.Turkish]: string;
  [Locale.Ukrainian]: string;
  [Locale.Vietnamese]: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/reference#api-versioning-api-versions
 * @remarks
 * - Versions below 9 are deprecated and should not be used.
 */
export type APIVersion = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * @public
 * @see https://discord.com/developers/docs/reference#image-data
 */
export type AudioDataUri = `data:audio/mpeg;base64,${string}` | `data:audio/ogg;base64,${string}`;

/**
 * @public
 * @see https://discord.com/developers/docs/reference#image-data
 */
export type ImageDataUri =
  | `data:image/jpeg;base64,${string}`
  | `data:image/png;base64,${string}`
  | `data:image/gif;base64,${string}`;

/**
 * @public
 * @see https://discord.com/developers/docs/reference#iso8601-datetime
 */
export type ISO8601Date = string;

/**
 * @public
 * @see https://discord.com/developers/docs/reference#locales
 */
export type Localizations = Partial<Locales>;

/**
 * @public
 * @see https://discord.com/developers/docs/reference#snowflakes
 */
export type Snowflake = string;

/**
 * @public
 * @see https://discord.com/developers/docs/topics/voice-connections#voice-gateway-versioning-gateway-versions
 * @remarks
 * - Versions below 4 are deprecated and should not be used.
 */
export type VoiceVersion = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * @public
 * @see https://discord.com/developers/docs/reference#locales
 */
export enum Locale {
  Bulgarian = "bg",
  ChineseCN = "zh-CN",
  ChineseTW = "zh-TW",
  Croatian = "hr",
  Czech = "cs",
  Danish = "da",
  Dutch = "nl",
  EnglishUK = "en-GB",
  EnglishUS = "en-US",
  Finnish = "fi",
  French = "fr",
  German = "de",
  Greek = "el",
  Hindi = "hi",
  Hungarian = "hu",
  Indonesian = "id",
  Italian = "it",
  Japanese = "ja",
  Korean = "ko",
  Lithuanian = "lt",
  Norwegian = "no",
  Polish = "pl",
  PortugueseBR = "pt-BR",
  Romanian = "ro",
  Russian = "ru",
  SpanishES = "es-ES",
  SpanishLATAM = "es-419",
  Swedish = "sv-SE",
  Thai = "th",
  Turkish = "tr",
  Ukrainian = "uk",
  Vietnamese = "vi",
}
