import type { ISO8601Date, Snowflake } from "#types/miscellaneous/discord.js";
import type { MessageComponent } from "#types/resources/Components/index.js";
import type { MessagePoll } from "#types/resources/Polls/index.js";
import type { BitFieldResolver } from "#utils/index.js";
import type { MessageFlags, ReactionType } from "../enums.js";
import type { AllowedMentions, Attachment, Embed, MessageReference, PartialAttachment } from "../structures/parsed.js";

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
	attachments?: PartialAttachment[];
	components?: MessageComponent[];
	content?: string;
	embeds?: Embed[];
	enforceNonce?: boolean;
	flags?: BitFieldResolver | MessageFlags;
	messageReference?: MessageReference;
	nonce?: number | string;
	poll?: MessagePoll;
	stickerIds?: Snowflake[];
	tts?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/message#edit-message-jsonform-params
 */
export interface EditMessageOptions {
	allowedMentions?: AllowedMentions | null;
	attachments?: Attachment[] | null;
	components?: MessageComponent[] | null;
	content?: string | null;
	embeds?: Embed[];
	flags?: BitFieldResolver | MessageFlags;
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
