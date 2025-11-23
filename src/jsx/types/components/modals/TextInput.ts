import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";
import type { TextInputStyle } from "#types/index.js";

export type TextInputProperties = ComponentProperties<
	{
		customId: string;
		maxLength?: number;
		minLength?: number;
		placeholder?: string;
		required?: boolean;
		style: TextInputStyle;
		value?: string;
	},
	TextInputChildren
>;

export type TextInputChildren = string;
