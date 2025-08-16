import { EmbedFieldBuilder } from "#builders/index.js";
import type { EmbedFieldProperties } from "#jsx/types/index.js";

/**
 * Creates an {@link EmbedFieldBuilder | `EmbedFieldBuilder`} instance using JSX.
 * @param properties - The properties of the {@link EmbedField | `EmbedField`} component.
 * @returns The created {@link EmbedFieldBuilder | `EmbedFieldBuilder`} instance.
 */
export function EmbedField(properties: EmbedFieldProperties): EmbedFieldBuilder {
	const embedField = new EmbedFieldBuilder();
	const { children, inline, name, value } = properties;

	if (inline) {
		embedField.setInline(inline);
	}

	if (name) {
		embedField.setName(name);
	}

	if (value) {
		embedField.setValue(value);
	}

	if (children && typeof children === "string") {
		embedField.setValue(children);
	}

	return embedField;
}
