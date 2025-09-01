import { EmbedFieldBuilder } from "#builders/index.js";
import type { EmbedFieldProperties } from "#jsx/types/index.js";

/**
 * Creates an {@link EmbedFieldBuilder | `EmbedFieldBuilder`} instance using a JSX component.
 * @param properties - The properties of the {@link EmbedField | `EmbedField`} JSX component.
 * @returns The created {@link EmbedFieldBuilder | `EmbedFieldBuilder`} instance.
 */
export function EmbedField(properties: EmbedFieldProperties): EmbedFieldBuilder {
	const embedField = new EmbedFieldBuilder();
	const { children, inline, name, value } = properties;

	embedField.setName(name);

	inline && embedField.setInline(inline);
	value && embedField.setValue(value);

	if (typeof children === "string") {
		embedField.setValue(children);
	}

	return embedField;
}
