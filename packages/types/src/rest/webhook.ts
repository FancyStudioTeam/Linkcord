import type { APIMessage } from "../payloads/message.js";
import type { APIWebhook } from "../payloads/webhook.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#create-webhook
 */
export type RESTCreateWebhook = APIWebhook;

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
 * @see https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token
 */
export type RESTDeleteWebhookWithToken = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#edit-webhook-message
 */
export type RESTEditWebhookMessage = APIMessage;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook
 */
export type RESTExecuteGitHubCompatibleWebhook = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook
 */
export type RESTExecuteSlackCompatibleWebhook = undefined;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#execute-webhook
 */
export type RESTExecuteWebhook = undefined | APIMessage;

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
 * @see https://discord.com/developers/docs/resources/webhook#get-webhook-with-token
 */
export type RESTGetWebhookWithToken = APIWebhook;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#modify-webhook
 */
export type RESTModifyWebhook = APIWebhook;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token
 */
export type RESTModifyWebhookWithToken = APIWebhook;
