import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";

export type EmbedFieldProperties = ComponentProperties<
	{
		inline?: boolean;
		name: string;
		value?: string;
	},
	EmbedFieldChildren
>;

export type EmbedFieldChildren = string;
