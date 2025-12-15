import type { Snowflake } from "#types/miscellaneous/discord.js";
import type { ChannelOverwriteType } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export interface ChannelOverwrite {
	allow: string;
	deny: string;
	id: Snowflake;
	type: ChannelOverwriteType;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure
 */
export interface FollowedChannel {
	channelId: Snowflake;
	webhookId: Snowflake;
}
