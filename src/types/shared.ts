/**
 * =================================================
 * = Types referenced in the Discord API Reference =
 * =================================================
 */

/**
 * https://discord.com/developers/docs/reference#api-versioning-api-versions
 */
export type APIVersion = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * https://discord.com/developers/docs/reference#iso8601-datetime
 */
export type ISO8601Date = string;

/**
 * https://discord.com/developers/docs/reference#locales
 */
export interface Locales {
  "en-GB": string;
  "en-US": string;
  "es-419": string;
  "es-ES": string;
  "pt-BR": string;
  "sv-SE": string;
  "zh-CN": string;
  "zh-TW": string;
  bg: string;
  cs: string;
  da: string;
  de: string;
  el: string;
  fi: string;
  fr: string;
  hi: string;
  hr: string;
  hu: string;
  id: string;
  it: string;
  ja: string;
  ko: string;
  nl: string;
  no: string;
  pl: string;
  ro: string;
  ru: string;
  th: string;
  tr: string;
  uk: string;
  vi: string;
}

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
