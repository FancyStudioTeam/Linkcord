import type { EmbedAuthorBuilder, EmbedFieldBuilder, EmbedFooterBuilder } from "#builders/structures/index.js";
import type { EmbedAuthor, EmbedField, EmbedFooter } from "#types/index.js";

export type AllowedEmbedAuthor = EmbedAuthorBuilder | EmbedAuthor;
export type AllowedEmbedColor = `#${string}` | number;
export type AllowedEmbedField = EmbedFieldBuilder | EmbedField;
export type AllowedEmbedFooter = EmbedFooterBuilder | EmbedFooter;
export type AllowedEmbedImageUrl = URL | string;
export type AllowedEmbedThumbnailUrl = URL | string;
export type AllowedEmbedTimestamp = Date | string;
export type AllowedEmbedUrl = URL | string;
