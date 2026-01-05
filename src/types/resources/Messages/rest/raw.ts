import type { ISO8601Date, Snowflake } from '#types/miscellaneous/discord.js';
import type { RawMessageChildComponent } from '#types/resources/Components/index.js';
import type { RawMessagePoll } from '#types/resources/Polls/index.js';
import type { MessageFlags, ReactionType } from '../enums.js';
import type { RawAllowedMentions, RawEmbed, RawMessageReference, RawPartialAttachment } from '../structures/raw.js';

/**
 * @see https://discord.com/developers/docs/resources/message#bulk-delete-messages-json-params
 */
export interface RawBulkDeleteMessagesOptions {
	messages: Snowflake[];
}

/**
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export interface RawCreateMessageOptions {
	allowed_mentions?: RawAllowedMentions;
	attachments?: RawPartialAttachment[];
	components?: RawMessageChildComponent[];
	content?: string;
	embeds?: RawEmbed[];
	enforce_nonce?: boolean;
	flags?: MessageFlags;
	message_reference?: RawMessageReference;
	nonce?: number | string;
	poll?: RawMessagePoll;
	sticker_ids?: Snowflake[];
	tts?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/message#edit-message-jsonform-params
 */
export interface RawEditMessageOptions {
	allowed_mentions?: RawAllowedMentions | null;
	attachments?: RawPartialAttachment[] | null;
	components?: RawMessageChildComponent[] | null;
	content?: string | null;
	embeds?: RawEmbed[] | null;
	flags?: MessageFlags | null;
}

/**
 * @see https://discord.com/developers/docs/resources/message#get-channel-messages-query-string-params
 */
export interface RawGetChannelMessagesQueryStringParams {
	after?: Snowflake;
	around?: Snowflake;
	before?: Snowflake;
	limit?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#get-channel-pins-query-string-params
 */
export interface RawGetChannelPinsQueryStringParams {
	before?: ISO8601Date;
	limit?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#get-reactions-query-string-params
 */
export interface RawGetMessageReactionsQueryStringParams {
	after?: Snowflake;
	limit?: number;
	type?: ReactionType;
}
