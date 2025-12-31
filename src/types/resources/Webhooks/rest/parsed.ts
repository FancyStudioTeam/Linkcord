import type { File } from '#rest/index.js';
import type { Snowflake } from '#types/miscellaneous/discord.js';
import type {
	WebhookAvatarResolvable,
	WebhookChannelResolvable,
	WebhookComponentResolvable,
	WebhookEmbedResolvable,
	WebhookFlagsResolvable,
	WebhookPollResolvable,
	WebhookThreadResolvable,
} from '#types/resolvables/Webhooks.js';
import type { AllowedMentions } from '#types/resources/Messages/index.js';

/**
 * @see https://discord.com/developers/docs/resources/webhook#create-webhook-json-params
 */
export interface CreateWebhookOptions {
	avatar?: WebhookAvatarResolvable | null;
	name: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#delete-webhook-message-query-string-params
 */
export interface DeleteWebhookMessageOptions {
	thread?: WebhookThreadResolvable;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#edit-webhook-message-jsonform-params
 */
export interface EditWebhookMessageOptions {
	allowedMentions?: AllowedMentions | null;
	components?: WebhookComponentResolvable[] | null;
	content?: string | null;
	embeds?: WebhookEmbedResolvable[] | null;
	flags?: WebhookFlagsResolvable | null;
	poll?: WebhookPollResolvable | null;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params
 */
export interface EditWebhookOptions {
	avatar?: WebhookAvatarResolvable | null;
	channel?: WebhookChannelResolvable;
	name?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params
 */
export interface ExecuteWebhookOptions {
	allowedMentions?: AllowedMentions;
	appliedTags?: Snowflake[];
	avatarUrl?: string;
	components?: WebhookComponentResolvable[];
	content?: string;
	files?: File[];
	flags?: WebhookFlagsResolvable;
	embeds?: WebhookEmbedResolvable[];
	poll?: WebhookPollResolvable;
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
	thread?: WebhookThreadResolvable;
}
