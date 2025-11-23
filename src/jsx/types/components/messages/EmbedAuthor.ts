import type { AllowedEmbedAuthorURL } from "#builders/index.js";
import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";

export type EmbedAuthorProperties = ComponentProperties<
	{
		iconURL?: AllowedEmbedAuthorURL;
		name?: string;
		url?: AllowedEmbedAuthorURL;
	},
	EmbedAuthorChildren
>;

export type EmbedAuthorChildren = string;
