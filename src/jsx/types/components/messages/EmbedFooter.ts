import type { AllowedEmbedFooterIconURL } from "#builders/index.js";
import { EmbedFooter } from "#jsx/components/index.js";
import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";

/** Represents the properties of the {@link EmbedFooter | `EmbedFooter`} JSX component. */
export type EmbedFooterProperties = ComponentProperties<
	{
		/** The URL of the icon of the footer. */
		iconURL?: AllowedEmbedFooterIconURL;
		/** The text of the footer. */
		text?: string;
	},
	EmbedFooterChildren
>;

/** Represents the children of the {@link EmbedFooter | `EmbedFooter`} JSX component. */
export type EmbedFooterChildren = string;
