import type { ImageDataURI, Snowflake } from '#types/miscellaneous/discord.js';
import type { APIMessageComponents } from '#types/resources/Components/index.js';
import type { APIPartialAttachent, MessageFlags, RawAllowedMentions, RawEmbed } from '#types/resources/Messages/index.js';
import type { RawMessagePoll } from '#types/resources/Polls/index.js';

/**
 * @see https://discord.com/developers/docs/resources/webhook#create-webhook-json-params
 */
export interface RawCreateWebhookOptions {
	avatar?: ImageDataURI | null;
	name: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#delete-webhook-message-query-string-params
 */
export interface RawDeleteWebhookMessageQueryStringParams {
	thread_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#edit-webhook-message-jsonform-params
 */
export interface RawEditWebhookMessageOptions {
	allowed_mentions?: RawAllowedMentions | null;
	attachments?: APIPartialAttachent[] | null;
	components?: APIMessageComponents[] | null;
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
 * @see https://discord.com/developers/docs/resources/webhook#edit-webhook-message-query-string-params
 */
export interface RawEditWebhookQueryStringParams {
	thread_id?: Snowflake;
	with_components: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params
 */
export interface RawExecuteWebhookOptions {
	allowed_mentions?: RawAllowedMentions;
	applied_tags?: Snowflake[];
	attachments?: APIPartialAttachent[];
	avatar_url?: string;
	components?: APIMessageComponents[];
	content?: string;
	flags?: MessageFlags;
	embeds?: RawEmbed[];
	poll?: RawMessagePoll;
	thread_name?: string;
	tts?: boolean;
	username?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#execute-webhook-query-string-params
 */
export interface RawExecuteWebhookQueryStringParams {
	thread_id?: Snowflake;
	wait?: boolean;
	with_components?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#get-webhook-message-query-string-params
 */
export interface RawGetWebhookMessageQueryStringParams {
	thread_id?: Snowflake;
}
