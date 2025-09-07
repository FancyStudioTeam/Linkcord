import type { ISO8601Date } from "#types/miscellaneous/discord.js";
import type { EmbedTypes } from "../enums.js";

/**
 * Represents an embed.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
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
 * Represents an embed author.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
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
 * Represents an embed field.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
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
 * Represents an embed footer.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure
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
 * Represents an embed image.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
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
 * Represents an embed provider.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 */
export interface APIEmbedProvider {
	/** The name of the provider. */
	name?: string;
	/** The URL of the provider. */
	url?: string;
}

/**
 * Represents an embed thumbnail.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
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
 * Represents an embed video.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
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
 */
export interface APIMessage {
	/** The content of the message. */
	content: string;
}
