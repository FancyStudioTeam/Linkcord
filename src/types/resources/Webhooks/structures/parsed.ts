import type { Snowflake } from '#types/miscellaneous/discord.js';

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-example-channel-follower-webhook
 */
export interface WebhookSourceChannel {
	id: Snowflake;
	name: string;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-example-channel-follower-webhook
 */
export interface WebhookSourceGuild {
	icon: string | null;
	id: Snowflake;
	name: string;
}
