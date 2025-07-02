import type { Snowflake } from "../shared/discord.js";
import type { APIGuildChannel } from "./Channels.js";
import type { APIGuild } from "./Guilds.js";
import type { APIUser } from "./Users.js";

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure
 */
export interface APIWebhook {
	application_id: Snowflake | null;
	avatar: string | null;
	channel_id: Snowflake | null;
	guild_id?: Snowflake | null;
	id: Snowflake;
	name: string | null;
	source_channel: APIWebhookSourceChannel;
	source_guild?: APIWebhookSourceGuild;
	token?: string;
	type: WebhookTypes;
	url?: string;
	user?: APIUser;
}

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-example-channel-follower-webhook
 */
export type APIWebhookSourceChannel = Pick<APIGuildChannel, "id" | "name">;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-example-channel-follower-webhook
 */
export type APIWebhookSourceGuild = Pick<APIGuild, "icon" | "id" | "name">;

/**
 * @public
 * @see https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
 */
export enum WebhookTypes {
	Application = 3,
	ChannelFollower = 2,
	Incoming = 1,
}
