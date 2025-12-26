import type { Snowflake } from '#types/miscellaneous/discord.js';
import type { APIUser } from '#types/resources/Users/index.js';
import type { WebhookType } from '../enums.js';

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-example-channel-follower-webhook
 */
export interface RawChannelFollowerWebhook extends RawWebhookBase<WebhookType.ChannelFollower> {
	/**
	 * @remarks
	 * - This field will be absent if the webhook creator has lost access to the
	 * guild where the followed channel resides.
	 */
	source_channel?: RawWebhookSourceChannel;
	/**
	 * @remarks
	 * - This field will be absent if the webhook creator has lost access to the
	 * guild where the followed channel resides.
	 */
	source_guild?: RawWebhookSourceGuild;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-example-incoming-webhook
 */
export interface RawIncomingWebhook extends RawWebhookBase<WebhookType.Incoming> {
	token: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure
 */
export interface RawWebhookBase<Type extends WebhookType> {
	application_id: Snowflake | null;
	avatar: string | null;
	channel_id: Snowflake | null;
	guild_id?: Snowflake | null;
	id: Snowflake;
	name: string | null;
	type: Type;
	user?: APIUser;
	url?: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-example-channel-follower-webhook
 */
export interface RawWebhookSourceChannel {
	id: Snowflake;
	name: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-example-channel-follower-webhook
 */
export interface RawWebhookSourceGuild {
	icon: string | null;
	id: Snowflake;
	name: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-example-application-webhook
 */
export type RawApplicationWebhook = RawWebhookBase<WebhookType.Application>;

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure
 */
export type RawWebhook = RawApplicationWebhook | RawChannelFollowerWebhook | RawIncomingWebhook;
