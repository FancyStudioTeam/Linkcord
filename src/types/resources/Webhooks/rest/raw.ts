import type { ImageDataURI, Snowflake } from '#types/miscellaneous/discord.js';
import type { RawMessageChildComponent } from '#types/resources/Components/index.js';
import type { MessageFlags, RawAllowedMentions, RawEmbed, RawPartialAttachment } from '#types/resources/Messages/index.js';
import type { RawMessagePoll } from '#types/resources/Polls/index.js';

/**
 * @see https://discord.com/developers/docs/resources/webhook#create-webhook-json-params
 */
export interface RawCreateWebhookOptions {
	avatar?: ImageDataURI | null;
	name: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#edit-webhook-message-jsonform-params
 */
export interface RawEditWebhookMessageOptions {
	allowed_mentions?: RawAllowedMentions | null;
	attachments?: RawPartialAttachment[] | null;
	components?: RawMessageChildComponent[] | null;
	content?: string | null;
	embeds?: RawEmbed[] | null;
	flags?: MessageFlags | null;
	poll?: RawMessagePoll | null;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params
 */
export interface RawEditWebhookOptions {
	avatar?: ImageDataURI | null;
	channel_id?: Snowflake;
	name?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params
 */
export interface RawExecuteWebhookOptions {
	allowed_mentions?: RawAllowedMentions;
	applied_tags?: Snowflake[];
	attachments?: RawPartialAttachment[];
	avatar_url?: string;
	components?: RawMessageChildComponent[];
	content?: string;
	flags?: MessageFlags;
	embeds?: RawEmbed[];
	poll?: RawMessagePoll;
	thread_name?: string;
	tts?: boolean;
	username?: string;
}
