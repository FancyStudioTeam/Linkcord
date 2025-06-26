import type { APIMessageComponent } from "../payloads/Components.js";
import type {
  APIAllowedMentions,
  APIEmbed,
  APIMessage,
  APIPartialAttachment,
} from "../payloads/Messages.js";
import type { APIMessagePoll } from "../payloads/Polls.js";
import type { APIWebhook } from "../payloads/Webhooks.js";
import type { ImageDataUri, Snowflake } from "../shared/discord.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#delete-webhook-message-query-string-params
 */
export interface RESTDeleteWebhookMessageQueryStringParams {
  thread_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#get-webhook-message-query-string-params
 */
export interface RESTGetWebhookMessageQueryStringParams {
  thread_id?: Snowflake;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#edit-webhook-message-jsonform-params
 */
export interface RESTPatchWebhookMessageJSONParams {
  allowed_mentions?: APIAllowedMentions | null;
  attachments?: APIPartialAttachment[] | null;
  components?: APIMessageComponent[] | null;
  content?: string | null;
  embeds?: APIEmbed[] | null;
  flags?: number | null;
  poll?: APIMessagePoll | null;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#edit-webhook-message-query-string-params
 */
export interface RESTPatchWebhookMessageQueryStringParams {
  thread_id?: Snowflake;
  with_components?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook-query-string-params
 */
export interface RESTPostWebhookGitHubQueryStringParams {
  thread_id?: Snowflake;
  wait?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook-query-string-params
 */
export interface RESTPostWebhookSlackQueryStringParams {
  thread_id?: Snowflake;
  wait?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params
 */
export interface RESTPostWebhookJSONParams {
  allowed_mentions?: APIAllowedMentions;
  applied_tags?: Snowflake[];
  attachments?: APIPartialAttachment[];
  avatar_url?: string;
  components?: APIMessageComponent[];
  content?: string;
  embeds?: APIEmbed[];
  flags?: number;
  poll?: APIMessagePoll;
  thread_name?: string;
  tts?: boolean;
  username?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#execute-webhook-query-string-params
 */
export interface RESTPostWebhookQueryStringParams {
  thread_id?: Snowflake;
  wait?: boolean;
  with_components?: boolean;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params
 */
export interface RESTPatchWebhookJSONParams {
  avatar?: ImageDataUri | null;
  channel_id?: Snowflake;
  name?: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#create-webhook-json-params
 */
export interface RESTPostChannelWebhookJSONParams {
  avatar?: ImageDataUri | null;
  name: string;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#delete-webhook
 */
export type RESTDeleteWebhook = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#delete-webhook-message
 */
export type RESTDeleteWebhookMessage = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#get-channel-webhooks
 */
export type RESTGetChannelWebhooks = APIWebhook[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#get-guild-webhooks
 */
export type RESTGetGuildWebhooks = APIWebhook[];

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#get-webhook
 */
export type RESTGetWebhook = APIWebhook;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#get-webhook-message
 */
export type RESTGetWebhookMessage = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#modify-webhook
 */
export type RESTPatchWebhook = APIWebhook;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#edit-webhook-message
 */
export type RESTPatchWebhookMessage = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#create-webhook
 */
export type RESTPostChannelWebhook = APIWebhook;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#execute-webhook
 */
export type RESTPostWebhook = undefined | APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook
 */
export type RESTPostWebhookGitHub = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook
 */
export type RESTPostWebhookSlack = undefined;
