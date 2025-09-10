import type { ISO8601Date, Snowflake } from "#types/miscellaneous/discord.js";
import type { ChannelTypes } from "#types/resources/Channels/enums.js";
import type { APIUser } from "#types/resources/Users/index.js";
import type { EmbedTypes, MessageFlags, MessageTypes } from "../enums.js";

/**
 * Represents a Discord channel mention object.
 * @see https://discord.com/developers/docs/resources/message#channel-mention-object-channel-mention-structure
 *
 * @group API/Interfaces
 */
export interface APIChannelMention {
	/** The ID of the guild where the channel is located. */
	guild_id: Snowflake;
	/** The ID of the channel. */
	id: Snowflake;
	/** The name of the channel. */
	name: string;
	/** The type of the channel. */
	type: ChannelTypes;
}

/**
 * Represents a Discord embed object.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 *
 * @group API/Interfaces
 */
export interface APIEmbed {
	/** The author of the embed. */
	author?: APIEmbedAuthor;
	/** The color of the embed. */
	color?: number;
	/** The description of the embed. */
	description?: string;
	/** The fields of the embed. */
	fields?: APIEmbedField[];
	/** The footer of the embed. */
	footer?: APIEmbedFooter;
	/** The image of the embed. */
	image?: APIEmbedImage;
	/** The provider of the embed. */
	provider?: APIEmbedProvider;
	/** The thumbnail of the embed. */
	thumbnail?: APIEmbedThumbnail;
	/** The timestamp of the embed. */
	timestamp?: ISO8601Date;
	/** The title of the embed. */
	title?: string;
	/** The type of the embed. */
	type?: EmbedTypes;
	/** The URL of the embed. */
	url?: string;
	/** The video of the embed. */
	video?: APIEmbedVideo;
}

/**
 * Represents a Discord embed author object.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
 *
 * @group API/Interfaces
 */
export interface APIEmbedAuthor {
	/** The URL of the icon of the author. */
	icon_url?: string;
	/** The name of the author. */
	name: string;
	/** The proxied URL of the icon of the author. */
	proxy_icon_url?: string;
	/** The URL of the author. */
	url?: string;
}

/**
 * Represents a Discord embed field object.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 *
 * @group API/Interfaces
 */
export interface APIEmbedField {
	/** Whether the field should be displayed inline. */
	inline?: boolean;
	/** The name of the field. */
	name: string;
	/** The value of the field. */
	value: string;
}

/**
 * Represents a Discord embed footer object.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
 *
 * @group API/Interfaces
 */
export interface APIEmbedFooter {
	/** The URL of the icon of the footer. */
	icon_url?: string;
	/** The proxied URL of the icon of the footer. */
	proxy_icon_url?: string;
	/** The text of the footer. */
	text: string;
}

/**
 * Represents a Discord embed image object.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 *
 * @group API/Interfaces
 */
export interface APIEmbedImage {
	/** The height of the image. */
	height?: number;
	/** The proxied URL of the image. */
	proxy_url?: string;
	/** The URL of the image. */
	url: string;
	/** The width of the image. */
	width?: number;
}

/**
 * Represents a Discord embed provider object.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 *
 * @group API/Interfaces
 */
export interface APIEmbedProvider {
	/** The name of the provider. */
	name?: string;
	/** The URL of the provider. */
	url?: string;
}

/**
 * Represents a Discord embed thumbnail object.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
 *
 * @group API/Interfaces
 */
export interface APIEmbedThumbnail {
	/** The height of the thumbnail. */
	height?: number;
	/** The proxied URL of the thumbnail. */
	proxy_url?: string;
	/** The URL of the thumbnail. */
	url: string;
	/** The width of the thumbnail. */
	width?: number;
}

/**
 * Represents a Discord embed video object.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 *
 * @group API/Interfaces
 */
export interface APIEmbedVideo {
	/** The height of the video. */
	height?: number;
	/** The proxied URL of the video. */
	proxy_url?: string;
	/** The URL of the video. */
	url: string;
	/** The width of the video. */
	width?: number;
}

/**
 * Represents a Discord message object.
 * @see https://discord.com/developers/docs/resources/message#message-object-message-structure
 *
 * @group API/Interfaces
 */
export interface APIMessage {
	/** The author of the message. */
	author: APIUser;
	/** The ID of the channel where the message was created. */
	channel_id: Snowflake;
	/** The content of the message. */
	content: string;
	/** The timestamp at which the message was edited. */
	edited_timestamp: ISO8601Date | null;
	/** The embeds of the message. */
	embeds: APIEmbed[];
	/** The flags of the message. */
	flags?: MessageFlags;
	/** The mention to channels in the message. */
	mention_channels?: APIChannelMention[];
	/** Whether the message mentions everyone. */
	mention_everyone: boolean;
	/** The mention of roles in the message. */
	mention_roles: Snowflake[];
	/** The mention of users in the message. */
	mentions: APIUser[];
	/** The nonce used for validating when a message was created. */
	nonce?: number | string;
	/** Whether the message is pinned. */
	pinned: boolean;
	/** The position of the message in the thread channel. */
	position?: number;
	/** The timestamp at which the message was created. */
	timestamp: ISO8601Date;
	/** Whether the message was a Text-to-Speech message. */
	tts: boolean;
	/** The type of the message. */
	type: MessageTypes;
	/** The ID of the webhook that created the message. */
	webhook_id?: Snowflake;
}
