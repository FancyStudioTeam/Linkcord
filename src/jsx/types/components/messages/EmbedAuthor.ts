import type { AllowedEmbedAuthorURL } from "#builders/index.js";
import { EmbedAuthor } from "#jsx/components/index.js";
import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";

/** Represents the properties of the {@link EmbedAuthor | `EmbedAuthor`} JSX component. */
export type EmbedAuthorProperties = ComponentProperties<
	{
		/** The URL of the icon of the author. */
		iconURL?: AllowedEmbedAuthorURL;
		/** The name of the author. */
		name?: string;
		/** The URL of the author. */
		url?: AllowedEmbedAuthorURL;
	},
	EmbedAuthorChildren
>;

/** Represents the children of the {@link EmbedAuthor | `EmbedAuthor`} JSX component. */
export type EmbedAuthorChildren = string;
