import type {
	AllowedEmbedAuthor,
	AllowedEmbedColor,
	AllowedEmbedField,
	AllowedEmbedFooter,
	AllowedEmbedImageURL,
	AllowedEmbedThumbnailURL,
	AllowedEmbedTimestamp,
	AllowedEmbedURL,
	EmbedFieldBuilder,
} from "#builders/index.js";
import { Embed } from "#jsx/components/index.js";
import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";

/** Represents the properties of the {@link Embed | `Embed`} component. */
export type EmbedProperties = ComponentProperties<
	{
		/** The author of the embed. */
		author?: AllowedEmbedAuthor;
		/** The color of the embed. */
		color?: AllowedEmbedColor;
		/** The description of the embed. */
		description?: string;
		/** The fields of the embed. */
		fields?: AllowedEmbedField[];
		/** The footer of the embed. */
		footer?: AllowedEmbedFooter;
		/** The image of the embed. */
		image?: AllowedEmbedImageURL;
		/** The thumbnail of the embed. */
		thumbnail?: AllowedEmbedThumbnailURL;
		/** The timestamp of the embed. */
		timestamp?: AllowedEmbedTimestamp;
		/** The title of the embed. */
		title?: string;
		/** The URL of the embed. */
		url?: AllowedEmbedURL;
	},
	EmbedChildren
>;

/** Represents the children of the {@link Embed | `Embed`} component. */
export type EmbedChildren = string | (string | EmbedFieldBuilder)[];
