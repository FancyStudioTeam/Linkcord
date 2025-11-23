import type { AllowedEmbedFooterIconURL } from "#builders/index.js";
import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";

export type EmbedFooterProperties = ComponentProperties<
	{
		iconURL?: AllowedEmbedFooterIconURL;
		text?: string;
	},
	EmbedFooterChildren
>;

export type EmbedFooterChildren = string;
