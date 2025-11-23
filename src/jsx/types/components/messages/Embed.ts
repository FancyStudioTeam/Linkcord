import type {
	AllowedEmbedAuthor,
	AllowedEmbedColor,
	AllowedEmbedField,
	AllowedEmbedFooter,
	AllowedEmbedImageURL,
	AllowedEmbedThumbnailURL,
	AllowedEmbedTimestamp,
	AllowedEmbedURL,
	EmbedAuthorBuilder,
	EmbedFieldBuilder,
	EmbedFooterBuilder,
} from "#builders/index.js";
import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";

export type EmbedProperties = ComponentProperties<
	{
		author?: AllowedEmbedAuthor;
		color?: AllowedEmbedColor;
		description?: string;
		fields?: AllowedEmbedField[];
		footer?: AllowedEmbedFooter;
		image?: AllowedEmbedImageURL;
		thumbnail?: AllowedEmbedThumbnailURL;
		timestamp?: AllowedEmbedTimestamp;
		title?: string;
		url?: AllowedEmbedURL;
	},
	EmbedChildren
>;

export type EmbedChildren = string | EmbedAuthorBuilder | EmbedFieldBuilder | EmbedFooterBuilder | EmbedChildren[];
