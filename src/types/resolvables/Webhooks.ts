import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { MessageComponentResolvable, MessageEmbedResolvable, MessageFlagsResolvable, MessagePollResolvable } from './Messages.js';

export type WebhookAvatarResolvable = Buffer | string;
export type WebhookChannelResolvable = Snowflake;
export type WebhookComponentResolvable = MessageComponentResolvable;
export type WebhookEmbedResolvable = MessageEmbedResolvable;
export type WebhookThreadResolvable = Snowflake;
export type WebhookFlagsResolvable = MessageFlagsResolvable;
export type WebhookPollResolvable = MessagePollResolvable;
