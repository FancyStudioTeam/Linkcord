import { EmbedFieldJSX } from "#jsx/components/index.js";
import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";

/**
 * Represents the properties of the {@link EmbedFieldJSX | `EmbedFieldJSX`}
 * component.
 * @group JSX/Messages
 * @public
 */
export type EmbedFieldJSXProperties = ComponentProperties<
	{
		/** Whether the field should be inline. */
		inline?: boolean;
		/** The name of the field. */
		name: string;
		/** The value of the field. */
		value?: string;
	},
	EmbedFieldJSXChildren
>;

/**
 * Represents the children of the {@link EmbedFieldJSX | `EmbedFieldJSX`}
 * component.
 * @group JSX/Messages
 * @public
 */
export type EmbedFieldJSXChildren = string;
