import type { ISO8601Date, Snowflake } from '#types/miscellaneous/discord.js';
import type { APIMessageComponents } from '#types/resources/Components/index.js';
import type { APIMessagePoll } from '#types/resources/Polls/index.js';
import type { RawUser } from '#types/resources/Users/index.js';
import type { MessageFlags, ReactionType } from '../enums.js';
import type {
	APIAllowedMentions,
	APIAttachment,
	APIEmbed,
	APIMessage,
	APIMessagePin,
	APIMessageReference,
	APIPartialAttachent,
} from '../structures/raw.js';

/**
 * @see https://discord.com/developers/docs/resources/message#get-channel-messages-query-string-params
 */
export interface RESTGetAPIChannelMessagesQueryStringParams {
	after?: Snowflake;
	around?: Snowflake;
	before?: Snowflake;
	limit?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#get-channel-pins
 */
export interface RESTGetAPIMessagePins {
	has_more: boolean;
	items: APIMessagePin[];
}

/**
 * @see https://discord.com/developers/docs/resources/message#get-channel-pins-query-string-params
 */
export interface RESTGetAPIMessagePinsJSONParams {
	before?: ISO8601Date;
	limit?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#get-reactions-query-string-params
 */
export interface RESTGetAPIMessageReactionsQueryStringParams {
	after?: Snowflake;
	limit?: number;
	type?: ReactionType;
}

/**
 * @see https://discord.com/developers/docs/resources/message#edit-message-jsonform-params
 */
export interface RESTPatchAPIMessageJSONParams {
	allowed_mentions?: APIAllowedMentions | null;
	attachments?: APIAttachment[] | null;
	components?: APIMessageComponents[] | null;
	content?: string | null;
	embeds?: APIEmbed[] | null;
	flags?: MessageFlags | null;
}

/**
 * @see https://discord.com/developers/docs/resources/message#bulk-delete-messages-json-params
 */
export interface RESTPostAPIMessageBulkJSONParams {
	messages: Snowflake[];
}

/**
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export interface RESTPostAPIMessageJSONParams {
	allowed_mentions?: APIAllowedMentions;
	attachments?: APIPartialAttachent[];
	components?: APIMessageComponents[];
	content?: string;
	embeds?: APIEmbed[];
	enforce_nonce?: boolean;
	flags?: MessageFlags;
	message_reference?: APIMessageReference;
	nonce?: number | string;
	poll?: APIMessagePoll;
	sticker_ids?: Snowflake[];
	tts?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/message#delete-message
 */
export type RESTDeleteAPIMessage = undefined;

/**
 * @see https://discord.com/developers/docs/resources/message#unpin-message
 */
export type RESTDeleteAPIMessagePin = undefined;

/**
 * @see https://discord.com/developers/docs/resources/message#delete-all-reactions-for-emoji
 */
export type RESTDeleteAPIMessageReaction = undefined;

/**
 * @see https://discord.com/developers/docs/resources/message#delete-all-reactions
 */
export type RESTDeleteAPIMessageReactions = undefined;

/**
 * @see https://discord.com/developers/docs/resources/message#delete-own-reaction
 */
export type RESTDeleteAPIOwnMessageReaction = undefined;

/**
 * @see https://discord.com/developers/docs/resources/message#delete-user-reaction
 */
export type RESTDeleteAPIUserMessageReaction = undefined;

/**
 * @see https://discord.com/developers/docs/resources/message#get-channel-message
 */
export type RESTGetAPIChannelMessage = APIMessage;

/**
 * @see https://discord.com/developers/docs/resources/message#get-channel-messages
 */
export type RESTGetAPIChannelMessages = APIMessage[];

/**
 * @see https://discord.com/developers/docs/resources/message#get-reactions
 */
export type RESTGetAPIMessageReactions = RawUser[];

/**
 * @see https://discord.com/developers/docs/resources/message#edit-message
 */
export type RESTPatchAPIMessage = APIMessage;

/**
 * @see https://discord.com/developers/docs/resources/message#create-message
 */
export type RESTPostAPIMessage = APIMessage;

/**
 * @see https://discord.com/developers/docs/resources/message#bulk-delete-messages
 */
export type RESTPostAPIMessageBulk = undefined;

/**
 * @see https://discord.com/developers/docs/resources/message#crosspost-message
 */
export type RESTPostAPIMessageCrosspost = APIMessage;

/**
 * @see https://discord.com/developers/docs/resources/message#pin-message
 */
export type RESTPutAPIMessagePin = undefined;

/**
 * @see https://discord.com/developers/docs/resources/message#create-reaction
 */
export type RESTPutAPIMessageReaction = undefined;
