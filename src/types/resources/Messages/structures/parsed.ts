import type { ISO8601Date } from "#types/miscellaneous/discord.js";
import type { EmbedTypes } from "../enums.js";

/**
 * Represents an embed.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-structure
 */
export interface Embed {
	/** The author of the embed. */
	author?: EmbedAuthor;
	/** The color of the embed. */
	color?: number;
	/** The description of the embed. */
	description?: string;
	/** The fields of the embed. */
	fields?: EmbedField[];
	/** The footer of the embed. */
	footer?: EmbedFooter;
	/** The image of the embed. */
	image?: EmbedImage;
	/** The provider of the embed. */
	provider?: EmbedProvider;
	/** The thumbnail of the embed. */
	thumbnail?: EmbedThumbnail;
	/** The timestamp of the embed. */
	timestamp?: ISO8601Date;
	/** The title of the embed. */
	title?: string;
	/** The type of the embed. */
	type?: EmbedTypes;
	/** The URL of the embed. */
	url?: string;
	/** The video of the embed. */
	video?: EmbedVideo;
}

/**
 * Represents an embed author.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure
 */
export interface EmbedAuthor {
	/** The URL of the icon of the author. */
	iconURL?: string;
	/** The name of the author. */
	name: string;
	/** The URL of the author. */
	url?: string;
}

/**
 * Represents an embed field.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure
 */
export interface EmbedField {
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
export interface EmbedFooter {
	/** The URL of the icon of the footer. */
	iconURL?: string;
	/** The text of the footer. */
	text: string;
}

/**
 * Represents an embed image.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure
 */
export interface EmbedImage {
	/** The URL of the image. */
	url: string;
}

/**
 * Represents an embed provider.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure
 */
export interface EmbedProvider {
	/** The name of the provider. */
	name?: string;
	/** The URL of the provider. */
	url?: string;
}

/**
 * Represents an embed thumbnail.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure
 */
export interface EmbedThumbnail {
	/** The URL of the thumbnail. */
	url: string;
}

/**
 * Represents an embed video.
 * @see https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure
 */
export interface EmbedVideo {
	/** The URL of the video. */
	url: string;
}
