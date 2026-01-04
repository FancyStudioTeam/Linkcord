import type { ISO8601Date, Snowflake } from '#types/miscellaneous/discord.js';
import type {
	BulkMessageResolvable,
	MessageComponentResolvable,
	MessageEmbedResolvable,
	MessageFileResolvable,
	MessageFlagsResolvable,
	MessageStickerResolvable,
} from '#types/resolvables/Messages.js';
import type { MessagePoll } from '#types/resources/Polls/index.js';
import type { ReactionType } from '../enums.js';
import type { AllowedMentions, MessageReference } from '../structures/parsed.js';

/**
 * @see https://discord.com/developers/docs/resources/message#bulk-delete-messages-json-params
 */
export interface BulkMessagesOptions {
	messages: BulkMessageResolvable[];
}

/**
 * @see https://discord.com/developers/docs/resources/message#create-message-jsonform-params
 */
export interface CreateMessageOptions {
	allowedMentions?: AllowedMentions;
	components?: MessageComponentResolvable[];
	content?: string;
	embeds?: MessageEmbedResolvable[];
	enforceNonce?: boolean;
	files?: MessageFileResolvable[];
	flags?: MessageFlagsResolvable;
	messageReference?: MessageReference;
	nonce?: number | string;
	poll?: MessagePoll;
	stickers?: MessageStickerResolvable[];
	tts?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/message#edit-message-jsonform-params
 */
export interface EditMessageOptions {
	allowedMentions?: AllowedMentions | null;
	components?: MessageComponentResolvable[] | null;
	content?: string | null;
	embeds?: MessageEmbedResolvable[] | null;
	flags?: MessageFlagsResolvable | null;
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
