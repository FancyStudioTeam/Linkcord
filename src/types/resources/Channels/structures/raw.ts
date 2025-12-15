import type { ISO8601Date, Snowflake } from "#types/miscellaneous/discord.js";
import type { APIUser } from "#types/resources/Users/index.js";
import type { AutoArchiveDuration, ChannelFlags, ChannelOverwriteType, ChannelType } from "../enums.js";

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface APIBaseChannel<Type extends ChannelType> {
	flags?: ChannelFlags;
	id: Snowflake;
	type: Type;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface APIBaseDMChannel<Type extends APIDMChannelType> extends APIBaseTextableChannel<Type> {
	recipients: APIUser[];
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface APIBaseGuildChannel<Type extends APIGuildChannelType> extends APIBaseChannel<Type> {
	guild_id: Snowflake;
	name: string;
	nsfw?: boolean;
	parent_id?: Snowflake | null;
	permission_overwrites?: APIChannelOverwrite[];
	position: number;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface APIBaseGuildTextableChannel<Type extends APIGuildTextableChannelType>
	extends APIBaseGuildChannel<Type> {
	default_auto_archive_duration?: AutoArchiveDuration;
	last_message_id: Snowflake | null;
	last_pin_timestamp?: ISO8601Date | null;
	rate_limit_per_user?: number;
	topic: string | null;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface APIBaseTextableChannel<Type extends APITextableChannelType> extends APIBaseChannel<Type> {
	last_message_id: Snowflake | null;
	last_pin_timestamp?: ISO8601Date | null;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export interface APIChannelOverwrite {
	allow: string;
	deny: string;
	id: Snowflake;
	type: ChannelOverwriteType;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure
 */
export interface APIFollowedChannel {
	channel_id: Snowflake;
	webhook_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface APIGroupDMChannel extends APIBaseDMChannel<ChannelType.GroupDM> {
	application_id?: Snowflake;
	icon: string | null;
	managed?: boolean;
	name: string | null;
	owner_id: Snowflake;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface APIGuildCategoryChannel extends APIBaseGuildChannel<ChannelType.GuildCategory> {
	parent_id?: null;
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export type APIChannel = APIDMChannel | APIGroupDMChannel | APIGuildCategoryChannel;

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export type APIDMChannel = APIBaseDMChannel<ChannelType.DirectMessage>;

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export type APIDMChannelType = ChannelType.DirectMessage | ChannelType.GroupDM;

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export type APIGuildChannelType = Exclude<ChannelType, APIDMChannelType>;

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export type APIGuildTextableChannelType = Exclude<
	APIGuildChannelType,
	ChannelType.GuildStageVoice | ChannelType.GuildVoice
>;

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export type APIPartialChannel = Partial<APIChannel>;

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export type APITextableChannelType = Exclude<ChannelType, ChannelType.GuildStageVoice | ChannelType.GuildVoice>;
