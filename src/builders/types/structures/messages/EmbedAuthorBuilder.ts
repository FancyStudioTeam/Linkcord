import type { EmbedAuthorBuilder } from "#builders/structures/index.js";
import type { EmbedAuthor } from "#types/index.js";

export type AllowedEmbedAuthor = EmbedAuthorBuilder | EmbedAuthor;
export type AllowedEmbedAuthorIconURL = URL | string;
export type AllowedEmbedAuthorURL = URL | string;
