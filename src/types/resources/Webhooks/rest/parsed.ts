import type { File } from '#rest/index.js';
import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { MessageComponents } from '#types/resources/Components/index.js';
import type { AllowedMentions, Embed, MessageFlags } from '#types/resources/Messages/index.js';
import type { MessagePoll } from '#types/resources/Polls/index.js';

/**
 * @see https://discord.com/developers/docs/resources/webhook#create-webhook-json-params
 */
export interface CreateWebhookOptions {
	avatar?: Buffer | null;
	name: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#delete-webhook-message-query-string-params
 */
export interface DeleteWebhookMessageOptions {
	thread?: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#edit-webhook-message-jsonform-params
 */
export interface EditWebhookMessageOptions {
	allowedMentions?: AllowedMentions | null;
	components?: MessageComponents[] | null;
	content?: string | null;
	embeds?: Embed[] | null;
	flags?: MessageFlags | null;
	poll?: MessagePoll | null;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params
 */
export interface EditWebhookOptions {
	avatar?: Buffer | null;
	channel?: Snowflake;
	name?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params
 */
export interface ExecuteWebhookOptions {
	allowedMentions?: AllowedMentions;
	appliedTags?: Snowflake[];
	avatarUrl?: string;
	components?: MessageComponents[];
	content?: string;
	files?: File[];
	flags?: MessageFlags;
	embeds?: Embed[];
	poll?: MessagePoll;
	threadId?: Snowflake;
	threadName?: string;
	tts?: boolean;
	username?: string;
	wait?: boolean;
	withComponents?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#get-webhook-message-query-string-params
 */
export interface GetWebhookMessageQueryStringParams {
	thread?: Snowflake;
}
