import type {
	EmbedAuthorBuilder,
	EmbedFieldBuilder,
	EmbedFooterBuilder,
} from "#builders/structures/index.js";
import type { EmbedAuthor, EmbedField, EmbedFooter } from "#types/index.js";

/**
 * Represents an author that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedAuthor = EmbedAuthorBuilder | EmbedAuthor;

/**
 * Represents a color that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedColor = `#${string}` | number;

/**
 * Represents a field that can be added or set to an embed builder.
 * @public
 */
export type AllowedEmbedField = EmbedFieldBuilder | EmbedField;

/**
 * Represents a footer that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedFooter = EmbedFooterBuilder | EmbedFooter;

/**
 * Represents an image URL that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedImageURL = URL | string;

/**
 * Represents a thumbnail URL that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedThumbnailURL = URL | string;

/**
 * Represents a timestamp that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedTimestamp = Date | string;

/**
 * Represents a URL that can be set to an embed builder.
 * @public
 */
export type AllowedEmbedURL = URL | string;
