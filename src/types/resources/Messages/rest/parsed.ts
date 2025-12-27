import type { File } from '#rest/index.js';
import type { ISO8601Date, Snowflake } from '#types/miscellaneous/discord.js';
import type { MessageComponents } from '#types/resources/Components/index.js';
import type { MessagePoll } from '#types/resources/Polls/index.js';
import type { BitField } from '#utils/index.js';
import type { MessageFlags, ReactionType } from '../enums.js';
import type { AllowedMentions, Attachment, Embed, MessageReference } from '../structures/parsed.js';

/**
 * @see https://discord.com/developers/docs/resources/message#bulk-delete-messages-json-params
 */
export interface BulkMessagesOptions {
	messages: Snowflake[];
}

/**
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export interface CreateMessageOptions {
	allowedMentions?: AllowedMentions;
	components?: MessageComponents[];
	content?: string;
	embeds?: Embed[];
	enforceNonce?: boolean;
	files?: File[];
	flags?: MessageFlagsResolvable;
	messageReference?: MessageReference;
	nonce?: number | string;
	poll?: MessagePoll;
	stickers?: StickerResolvable[];
	tts?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/message#edit-message-jsonform-params
 */
export interface EditMessageOptions {
	allowedMentions?: AllowedMentions | null;
	attachments?: Attachment[] | null;
	components?: MessageComponents[] | null;
	content?: string | null;
	embeds?: Embed[];
	flags?: BitField | MessageFlags;
}

/**
 * @see https://discord.com/developers/docs/resources/message#get-channel-messages-query-string-params
 */
export interface GetChannelMessagesOptions {
	after?: Snowflake;
	around?: Snowflake;
	before?: Snowflake;
	limit?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#get-channel-pins-query-string-params
 */
export interface GetMessagePinsOptions {
	before?: ISO8601Date;
	limit?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/message#get-reactions-query-string-params
 */
export interface GetMessageReactionsOptions {
	after?: Snowflake;
	limit?: number;
	type?: ReactionType;
}

/**
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export type MessageFlagsResolvable = MessageFlags[] | number;

/**
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export type StickerResolvable = Snowflake;
