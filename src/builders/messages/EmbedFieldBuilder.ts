import type { EmbedField } from "#types/index.js";

/**
 * Utility class for building embed fields.
 *
 * @public
 */
export class EmbedFieldBuilder {
	readonly data: Partial<EmbedField> = {};

	/**
	 * Sets whether the field is inline.
	 *
	 * @param inline - Whether the field is inline.
	 */
	setInline(inline: boolean): this {
		this.data.inline = inline;

		return this;
	}

	/**
	 * Sets the name of the field.
	 *
	 * @param name - The name of the field.
	 */
	setName(name: string): this {
		this.data.name = name;

		return this;
	}

	/**
	 * Sets the value of the field.
	 *
	 * @param value - The value of the field.
	 */
	setValue(value: string): this {
		this.data.value = value;

		return this;
	}

	/**
	 * Converts the {@link EmbedFieldBuilder | `EmbedFieldBuilder`} to a JSON
	 * object.
	 *
	 * @returns The {@link EmbedField | `EmbedField`} object.
	 */
	toJSON(): EmbedField {
		const { data } = this;
		const { inline, name, value } = data;

		if (!(name && value)) {
			throw new Error("Embed field must have a name and value.");
		}

		return {
			inline,
			name,
			value,
		};
	}
}
