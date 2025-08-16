import { EmbedField } from "#jsx/components/index.js";
import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";

/** Represents the properties of the {@link EmbedField | `EmbedField`} component. */
export type EmbedFieldProperties = ComponentProperties<
	{
		/** Whether the field should be inline. */
		inline?: boolean;
		/** The name of the field. */
		name: string;
		/** The value of the field. */
		value?: string;
	},
	EmbedFieldChildren
>;

/** Represents the children of the {@link EmbedField | `EmbedField`} component. */
export type EmbedFieldChildren = string;
