import type { APIEmoji } from "#payloads";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#list-application-emojis
 */
export interface RESTListApplicationEmojis {
  items: APIEmoji[];
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#create-application-emoji
 */
export type RESTCreateApplicationEmoji = APIEmoji;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#create-guild-emoji
 */
export type RESTCreateGuildEmoji = APIEmoji;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#delete-application-emoji
 */
export type RESTDeleteApplicationEmoji = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#delete-guild-emoji
 */
export type RESTDeleteGuildEmoji = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#get-application-emoji
 */
export type RESTGetApplicationEmoji = APIEmoji;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#get-guild-emoji
 */
export type RESTGetGuildEmoji = APIEmoji;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#list-guild-emojis
 */
export type RESTListGuildEmojis = APIEmoji[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#modify-application-emoji
 */
export type RESTModifyApplicationEmoji = APIEmoji;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/emoji#modify-guild-emoji
 */
export type RESTModifyGuildEmoji = APIEmoji;
