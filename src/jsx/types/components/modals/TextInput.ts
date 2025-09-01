import { TextInput } from "#jsx/components/index.js";
import type { ComponentProperties } from "#jsx/types/jsx-runtime.js";
import type { TextInputStyles } from "#types/index.js";

/** Represents the properties of the {@link TextInput | `TextInput`} JSX component. */
export type TextInputProperties = ComponentProperties<
	{
		/** The custom ID of the text input. */
		customId: string;
		/** The maximum length of the text input. */
		maxLength?: number;
		/** The minimum length of the text input. */
		minLength?: number;
		/** The placeholder of the text input. */
		placeholder?: string;
		/** Whether the text input is required for the modal. */
		required?: boolean;
		/** The style of the text input. */
		style: TextInputStyles;
		/** The default value of the text input. */
		value?: string;
	},
	TextInputChildren
>;

/** Represents the children of a {@link TextInput | `TextInput`} JSX component. */
export type TextInputChildren = string;
